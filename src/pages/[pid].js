import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaisakuList from "../components/TaisakuList";
import Post from "../components/Post";
import Head from "next/head";
import { useRouter } from "next/router";

/*
 * ルーティング専用のファイルにする
 * すべての情報をgraphqlから取得
 * 	title, date, content, ancestors, children
 * ホーム：何もなし
 * ancestorsの数が1：OO対策サイトと認識、Childrenを一覧表示するページへ移行
 * ancesttorsの数が2 or childrenの数が0：記事と認識、コンテンツを表示する
 */

// 1. GetStaticPathsで、すべての記事のパスを取得=> 重かったら、一部のみ取得
// 2. GetStaticPropsで、パスに対応する記事の情報を取得

export const getStaticPaths = async () => {
    let paths = [
        "15596",
        "4322",
        "2803",
        "803",
        "1403",
        "8960",
        "1766",
        "2949",
        "1272",
        "1305",
        "1396",
        "8677",
        "8652",
        "4056",
        "19128",
        "2646",
        "4042",
        "8737",
        "4247",
    ];

    return {
        paths: paths.map((path) => ({ params: { pid: path } })),
        fallback: "blocking",
    };
};

export const getStaticProps = async (context) => {
    const pid = context.params.pid;
    let getContent = `
	query getContent {
		pageBy(pageId: ${pid}) {
			title
			content
			featuredImage{
				node{
					mediaItemUrl
				}
			}
			pageId
			ancestors {
				nodes {
					... on Page {
						pageId
						title
					}
				}
			}
			children(last: 100) {
				nodes{
					... on Page {
						pageId
						title
					}
				}
			}
		}
	}
	`;

    const content = new Promise(async (resolve, reject) => {
        let recentPosts = await axios
            .post("https://shopclip.jp/wp/graphql", {
                query: getContent,
            })
            .catch((err) => {
                console.log("Error");
                reject(err);
            });
        resolve(recentPosts?.data);
    });

    const data = await content;

    let type = "post";
    if (
        data.data?.pageBy.ancestors?.nodes.length === 2 &&
        data.data?.pageBy.children?.nodes.length != 0
    ) {
        type = "taisakuList";
    } else if (data.data?.pageBy.ancestors?.nodes.length === 1) {
        type = "post";
    }

    let specialpost = ["15091", "7664", "3894", "12887"];
    if (specialpost.includes(pid)) {
        type = "post";
    }

    // for each item in data.data.pageBy.ancestors.nodes
    data.data?.pageBy?.ancestors.nodes.map((item) => {
        if (specialpost.includes(item.pageId.toString())) {
            type = "post";
        }
    });

    return {
        props: {
            pid: context.params.pid,
            pageData: data,
            type,
        },
    };
};

function Test1({ pid, pageData, type }) {
    const [data, setData] = useState(pageData);

    useEffect(() => {
        setData(pageData);
    }, [pid]);

    return (
        <div>
            <Header />
            <Head>
                <title>{data && data.data?.pageBy.title}</title>
                <meta
                    name="description"
                    content={data && data.data?.pageBy.title}
                />
                <link rel="icon" href="/logo.png" />
            </Head>
            <main>
                {type === "post" ? (
                    <Post pid={pid} data={data.data?.pageBy} />
                ) : (
                    <TaisakuList data={data.data?.pageBy} />
                )}
            </main>
            <Footer />
        </div>
    );
}
export default Test1;
