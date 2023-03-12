import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Image from "next/image";

function Posts({ data }) {
	return (
		<div className="">
			<div className="flex flex-col w-full min-h-screen bg-gray-200 pt-14">
				<div className="w-full h-[21vh] bg-blue-400/70 relative flex justify-around items-center flex-col md:flex-row text-white gap-4">
					<div className="absolute w-full h-full -z-10">
						<Image
							src={"/back.jpg"}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<h2 className="text-2xl text-white md:text-2xl">
						{data.title}
					</h2>
				</div>

				<div className="flex justify-center w-full min-h-[70vh]">
					<div className="flex flex-col  w-full gap-4 px-5 py-2 md:w-[70%] ">
						<div className="w-full py-5 grid lg:grid-cols-3 md:gap-10 md:px-10">
							{data.children.nodes.map((item, index) => {
								return (
									<PostCard
										key={index}
										title={item.title}
										content={item.content}
										image={
											item.featuredImage
												? item.featuredImage.node
														.sourceUrl
												: "/back.jpg"
										}
										date={item.date}
										pageId={item.pageId}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Posts;
