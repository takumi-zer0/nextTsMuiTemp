import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { SugPostContext } from "../pages/_app";
import axios from "axios";
import Suggestions from "./Suggestions";
import BreadCrumbs from "./BreadCrumbs";
import PostCard from "./PostCard";
import Adsense from "./Adsense";

function Posts(props) {
    const [data, setData] = useState(props.data);
    const [loading, setLoading] = useState(false);
    const { sugPostList, setSugPostList } = useContext(SugPostContext);

    useEffect(() => {
        let tempData = props.data;
        let content = props.data.content;

        content = content.replace(
            /<a href="https:\/\/shopclip.jp\/(.*?)"/g,
            '<a href="https://uguide.jp/$1"'
        );

        setData({ ...tempData, content });
    }, [props.data]);

    useEffect(() => {
        // add  toggle
        const toggleWraps = document.querySelectorAll(".arconix-toggle-wrap");
        // for each element, get class arconix-toggle-title
        toggleWraps.forEach((toggleWrap) => {
            const toggleTitle = toggleWrap.querySelector(
                ".arconix-toggle-title"
            );
            // if class arconix-toggle-title is clicked, toggle class arconix-toggle-content
            toggleTitle.addEventListener("click", () => {
                if (toggleTitle.classList.contains("toggle-closed")) {
                    toggleTitle.classList.remove("toggle-closed");
                    toggleTitle.classList.add("toggle-open");
                } else {
                    toggleTitle.classList.remove("toggle-open");
                    toggleTitle.classList.add("toggle-closed");
                }
            });
        });
    }, [data]);

    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-200">
            <div className="flex flex-col justify-center w-full pt-14 md:pt-16 gap-2 md:flex-row my-5 min-h-[70vh]">
                <div className="flex flex-col px-5 py-2 bg-white md:w-3/5 gap-4 rounded-md article min-h-[70vh]">
                    {loading || <BreadCrumbs ancestors={data?.ancestors} />}
                    {loading ? (
                        <div className="animate-pulse">
                            <div className="border-b">
                                <h1 className="w-full py-3 my-2 text-2xl bg-gray-100 rounded-full"></h1>
                                <p className="w-20 py-3 my-2 bg-gray-100 rounded-full"></p>
                                <div className="relative w-20 h-20 aspect-video"></div>
                            </div>
                            <div className="w-full h-40 my-2 bg-gray-200"></div>
                            <div className="w-full h-40 my-2 bg-gray-200"></div>
                            <div className="w-full h-20 my-2 bg-gray-200"></div>
                            <div className="w-full h-20 my-2 bg-gray-200"></div>
                            <div className="w-full h-20 my-2 bg-gray-200"></div>
                            <div className="w-full h-20 my-2 bg-gray-200"></div>
                        </div>
                    ) : data == null ? (
                        <div>
                            <h1 className="text-2xl text-center">
                                記事が見つかりませんでした。
                            </h1>
                        </div>
                    ) : (
                        <div>
                            <div className="w-[80%] aspect-video relative mx-auto overflow-hidden">
                                <Image
                                    layout="fill"
                                    priority
                                    src={
                                        data.featuredImage
                                            ? data.featuredImage.node
                                                  .mediaItemUrl
                                            : "/back.jpg"
                                    }
                                    objectFit="contain"
                                />
                            </div>
                            <PostHTML data={data} />
                        </div>
                    )}

                    <div className="my-3 border-t ">
                        <h2 className="font-bold">関連記事</h2>
                        <div className="grid lg:grid-cols-3 gap-1 grid-cols-1">
                            {sugPostList &&
                                sugPostList.map((post) => {
                                    return (
                                        <PostCard
                                            key={post.id}
                                            id={post.id}
                                            title={post.title}
                                            pageId={post.pageId}
                                            image={
                                                post.featuredImage &&
                                                post.featuredImage.node
                                                    .mediaItemUrl
                                            }
                                            date={post.date}
                                            ancestors={post.ancestors}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>

                <div className="px-5 md:w-1/3">
                    <div className="px-2 py-1 bg-white rounded-md">
                        {data?.ancestors && (
                            <Suggestions
                                pageId={data.ancestors.nodes[0].pageId}
                            />
                        )}
                    </div>
                    <Adsense />
                </div>
            </div>
        </div>
    );
}

function PostHTML({ data }) {
    return (
        <div>
            <div className="border-b">
                <h1 className="py-3 text-2xl">{data.title}</h1>
                <p>{data.date}</p>
            </div>
            <div
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            ></div>
        </div>
    );
}

export default Posts;
