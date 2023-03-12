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
	let url = props.image ? changeUrl(props.image) : "/back.jpg";
	const pageId = props.pageId || 140;
	const date = props.date || "2022/9/15";

	const [image, setImage] = useState(url);

	return (
		<Link href={`${pageId}/`} passHref>
			<a target={"_blank"}>
				<div className="flex items-center block px-1 py-2 overflow-hidden bg-white border-t hover:cursor-pointer transition-all hover:bg-gray-200">
					<div className="w-5/12 max-h-full overflow-hidden">
						<Image src={url} height={200} width={300} />
					</div>
					<div className="flex flex-col w-7/12 px-2 pb-4 gap-2 text-slate-800">
						<p>{title}</p>
						<p className="w-full text-xs text-gray-500">{date}</p>
					</div>
				</div>
			</a>
		</Link>
	);
}
export default PostCard;
