import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../components/PostCard";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeContext } from "./_app";

export const getStaticProps = async () => {
    let query = `
query getAllShikakus {
  pageBy(pageId: 825) {
    children(first: 100) {
      nodes {
        ... on Page {
          title
          pageId
        }
      }
    }
  }
}
`;

    let getShikaku = `
query getShikaku($id: Int!) {
	pageBy(pageId: $id) {
		children(first: 100) {
			nodes {
				... on Page {
					title
					pageId
				}
			}
		}
	}
}
`;

    let getRecentPost = `
query getRecentPost {
	pages(first: 20) {
		nodes {
			title
			pageId
			date
			featuredImage {
				node {
					mediaItemUrl
				}
			}
		}
	}
}
`;

    const recents = new Promise(async (resolve, reject) => {
        let recentPosts = await axios.post("https://shopclip.jp/wp/graphql", {
            query: getRecentPost,
        });
        recentPosts = recentPosts.data.data.pages.nodes;
        resolve(recentPosts);
    });
    let recentPosts = await recents;

    const main = new Promise(async (resolve, reject) => {
        let shikakuList = await axios.post("https://shopclip.jp/wp/graphql", {
            query: query,
        });

        shikakuList = shikakuList.data.data.pageBy.children.nodes;

        let shikakuArr = [];
        let finalArr = [];

        const LENGTH =
            process.env.NEXT_PUBLIC_DEPLOYMENT == "production"
                ? shikakuList.length
                : 10;

        for (let i = 0; i < LENGTH; i++) {
            let shikaku = await axios.post("https://shopclip.jp/wp/graphql", {
                query: getShikaku,
                variables: {
                    id: shikakuList[i].pageId,
                },
            });
            shikakuArr.push(shikaku.data.data.pageBy.children.nodes);

            finalArr.push({
                title: shikakuList[i].title,
                shikaku: shikakuArr[i],
            });
        }

        resolve(finalArr);
    });

    let res = await main;

    return {
        props: {
            shikakuArr: res,
            recentPosts: recentPosts,
        },
        revalidate: 6000,
    };
};

export default function Home({ shikakuArr, recentPosts }) {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className="">
            <Head>
                <title>Uguide・ユーガイド</title>
                <meta
                    name="description"
                    content="資格・勉強・仕事のポータルサイト"
                />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Header />

            <div className="w-full h-[70vh] bg-blue-400/70 relative flex justify-center items-center flex-col text-white gap-4">
                <div className="absolute w-full h-full -z-10">
                    <Image src={"/back.jpg"} layout="fill" objectFit="cover" />
                </div>
                <h2 className="text-5xl font-bold text-white">Uguide</h2>
                <h3 className="w-full text-center">
                    目指している試験の合格まであなた(You/U)をガイド(guide)します
                </h3>
                <form className="flex items-center px-5 py-2 mt-4 text-gray-600 bg-gray-100 rounded-full gap-2">
                    <Script
                        async
                        src="https://cse.google.com/cse.js?cx=2147eb6875f004dce"
                    ></Script>
                    <div className="gcse-searchbox-only"></div>
                </form>
            </div>

            <div className="bg-gray-200 min-h-[70vh] w-full flex flex-col items-center py-10">
                <h2 className="text-2xl">資格一覧</h2>

                <div className="w-full px-2 py-5 grid grid-cols-1 md:grid-cols-3 gap-4 md:px-20">
                    {shikakuArr.map((category, index) => (
                        <CategoryButton
                            key={index}
                            title={category.title}
                            shikakus={category.shikaku}
                        />
                    ))}
                </div>
            </div>
            <div className="bg-gray-200 min-h-[70vh] w-full flex flex-col items-center py-10">
                <h2 className="text-2xl">最新記事一覧</h2>

                <div className="w-full px-2 py-5 grid md:grid-cols-2 lg:grid-cols-3 lg:w-4/5 grid-cols-1 gap-4 md:px-20">
                    {recentPosts &&
                        recentPosts.map((post, index) => (
                            <PostCard
                                key={index}
                                title={post.title}
                                image={
                                    post.featuredImage
                                        ? post.featuredImage.node.mediaItemUrl
                                        : "/back.jpg"
                                }
                                date={post.date}
                                pageId={post.pageId}
                            />
                        ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

function CategoryButton({ title, shikakus }) {
    let renderTitle = title;
    //remove last 5 chars

    const [clicked, setClicked] = useState(false);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if (clicked) {
            setTimeout(() => {
                setShowList(true);
            }, 10);
        } else {
            setShowList(false);
        }
    }, [clicked]);

    return (
        <div className="">
            <div
                onClick={() => {
                    setClicked(!clicked);
                }}
                className={`w-full h-14 rounded-tr-md rounded-tl-md flex items-center transition-all px-5 hover:cursor-pointer relative justify-between 
			${
                clicked
                    ? "bg-blue-400 text-white z-10 scale-100"
                    : "z-0 rounded-br-md rounded-bl-md bg-white"
            }`}
            >
                <p>{renderTitle}</p>
                <p className="rotate-90">&gt;</p>
            </div>
            {showList && (
                <div className="flex flex-col w-full px-5 py-5 pl-10 bg-white rounded-br-md rounded-bl-md scale-100 gap-2">
                    {shikakus.map((shikaku, index) => {
                        let renderTitle = shikaku.title;
                        return (
                            <div key={index}>
                                <Link href={`${shikaku.pageId}/`} passHref>
                                    <a
                                        className="flex items-center hover:underline gap-2"
                                        target={"_blank"}
                                    >
                                        <p key={index}>{renderTitle}</p>
                                    </a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function ShikakuLink({ title, url }) {
    return (
        <Link href={url + "/"} passHref>
            <a
                href=""
                className="hover:underline text-slate-800"
                target={"_blank"}
            >
                {title}
            </a>
        </Link>
    );
}
