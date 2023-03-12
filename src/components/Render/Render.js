import Image from "next/image";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";

function Render({ postData }) {
    return (
        <div className="w-full flex flex-col gap-4 content">
            {postData.map((item, index) => {
                if (item.type === "text") {
                    return (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{
                                __html: item.data.content,
                            }}
                        ></div>
                    );
                } else if (item.type === "image") {
                    return (
                        <div
                            className="w-full flex flex-col items-center"
                            key={index}
                        >
                            <Image
                                src={item.data.url || "/noimage.png"}
                                alt={item.data.alt}
                                width={400}
                                height={300}
                                className="object-contain"
                            />
                            <p className="text-sm text-gray-400">
                                {item.data.alt}
                            </p>
                        </div>
                    );
                } else if (item.type == "heading") {
                    if (item.data.hType == "h1") {
                        return <h1 key={index}>{item.data.text}</h1>;
                    } else if (item.data.hType == "h2") {
                        return <h2 key={index}>{item.data.text}</h2>;
                    } else if (item.data.hType == "h3") {
                        return <h3 key={index}>{item.data.text}</h3>;
                    } else if (item.data.hType == "h4") {
                        return <h4 key={index}>{item.data.text}</h4>;
                    }
                } else if (item.type == "kattene") {
                    const katt = item.data;
                    return (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-md px-2 py-2 flex flex-col lg:flex-row justify-center items-center"
                        >
                            <div className=" flex justify-center items-center relative h-52 w-40">
                                <Image
                                    src={
                                        katt.imageUrl
                                            ? katt.imageUrl
                                            : "/noimage.png"
                                    }
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div>
                                    <Link href={katt.amazonUrl}>
                                        <a className="text-blue-500 underline hover:text-blue-800">
                                            <p>{katt.title}</p>
                                        </a>
                                    </Link>
                                    <p className="text-sm">{katt.author}</p>
                                    <p className="text-sm">{katt.publisher}</p>
                                </div>
                                <div className="grid grid-cols-2 lg:flex gap-2 py-2">
                                    {katt.amazonUrl && (
                                        <Link href={katt.amazonUrl}>
                                            <a className="bg-white border-2 rounded border-orange-400 flex justify-center items-center text-orange-400 underline py-2 px-2 font-bold hover:bg-orange-400 hover:text-white text-sm">
                                                Amazon
                                            </a>
                                        </Link>
                                    )}
                                    {katt.yahooUrl && (
                                        <Link href={katt.yahooUrl}>
                                            <a className="bg-white border-2 rounded border-blue-500 flex justify-center items-center text-blue-500 underline py-2 px-2 font-bold hover:bg-blue-500 hover:text-white text-sm">
                                                Yahoo / Paypay
                                            </a>
                                        </Link>
                                    )}
                                    {katt.rakutenUrl && (
                                        <Link href={katt.rakutenUrl}>
                                            <a className="bg-white border-2 rounded border-[#c20004] flex justify-center items-center text-[#c20004] underline py-2 px-2 font-bold hover:bg-[#c20004] hover:text-white text-sm">
                                                Rakuten
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                } else if (item.type == "innerLink") {
                    return (
                        <Link key={index} href={`/posts/${item.pageId}`}>
                            <a>
                                <div
                                    key={index}
                                    className="px-2 py-2 rounded-md border border-gray-200 bg-white flex gap-2 hover:bg-gray-200 transition-all cursor-pointer"
                                >
                                    <div className="relative aspect-video h-32 rounded-md overflow-hidden">
                                        <Image
                                            src={
                                                item.thumbnail
                                                    ? item.thumbnail
                                                    : "/noimage.png"
                                            }
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-lg font-bold">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    );
                } else if (item.type == "twitter") {
                    if (item.data.tweetId) {
                        return (
                            <TwitterTweetEmbed
                                key={index}
                                tweetId={`${item.data.tweetId}`}
                            />
                        );
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            })}
        </div>
    );
}
export default Render;
