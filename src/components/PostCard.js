import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function changeUrl(url) {
	let res = url.replace("uguide", "shopclip");
	return res;
}

function PostCard(props) {
	const title = props.title || "Title";
	const description = props.description || "Description";
	let url = props.image || "/back.jpg";
	const pageId = props.pageId || 140;
	const date = props.date || "2022/9/15";

	const [image, setImage] = useState(changeUrl(url) || "/back.jpg");
	if (props.loading == true) {
		return (
			<div>
				<div className="hidden overflow-hidden bg-white border rounded-md hover:shadow-md hover:cursor-pointer hover:scale-105 transition-all lg:block ">
					<div className="w-full h-40 overflow-hidden bg-gray-60"></div>
					<div className="flex flex-col px-2 pb-4 gap-2 text-slate-800">
						<div className="flex items-center w-full text-xs text-gray-500 gap-1">
							<FontAwesomeIcon
								icon={faClock}
								className="w-3 h-3"
							/>
							<p className=""></p>
						</div>
						<p className="text-sm"></p>
					</div>
				</div>

				<div className="flex items-center block px-1 py-2 overflow-hidden bg-white border-t h-44 hover:cursor-pointer transition-all lg:hidden">
					<div className="w-5/12 max-h-full overflow-hidden"></div>
					<div className="flex flex-col w-7/12 px-2 pb-4 gap-2 text-slate-800">
						<p>title</p>
						<p className="w-full text-xs text-gray-500">date</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Link href={`${pageId}/`} passHref>
				<a target={"_blank"}>
					<div className="hidden overflow-hidden bg-white border rounded-md hover:shadow-md hover:cursor-pointer hover:scale-105 transition-all lg:block ">
						<div className="overflow-hidden ">
							<Image src={image} height={400} width={600} />
						</div>
						<div className="flex flex-col px-2 pb-4 gap-2 text-slate-800">
							<div className="flex items-center w-full text-xs text-gray-500 gap-1">
								<FontAwesomeIcon
									icon={faClock}
									className="w-3 h-3"
								/>
								<p>{date}</p>
							</div>
							<p className="text-sm">{title}</p>
						</div>
					</div>
				</a>
			</Link>

			<Link href={`${pageId}/`} passHref>
				<a target={"_blank"}>
					<div className="flex items-center block px-1 py-2 overflow-hidden bg-white border-t h-44 hover:cursor-pointer transition-all lg:hidden">
						<div className="w-5/12 max-h-full overflow-hidden">
							<Image src={image} height={200} width={300} />
						</div>
						<div className="flex flex-col w-7/12 px-2 pb-4 gap-2 text-slate-800">
							<p>{title}</p>
							<p className="w-full text-xs text-gray-500">
								{date}
							</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
export default PostCard;
