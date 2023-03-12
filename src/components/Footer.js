import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Footer(props) {
	const [search, setSearch] = useState("");

	const router = useRouter();
	useEffect(() => {
		// eveery time path changes, refresh components
		router.events.on("routeChangeComplete", () => {
			setSearch("");
		});
	}, [router]);

	return (
		<div className="flex flex-col">
			<div></div>
			<div className="relative flex flex-col bg-blue-400/70">
				<div className="absolute w-full h-full -z-10">
					<Image src={"/back.jpg"} layout="fill" objectFit="cover" />
				</div>
				<div className="flex flex-col items-center w-full px-5 py-20 text-white gap-3 md:gap-0 md:justify-around md:px-10 md:flex-row">
					<div className="text-4xl font-bold ">Uguide</div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							router.push(`/search/${search}`);
						}}
						className="flex items-center px-3 py-1 text-gray-600 bg-white rounded-full gap-2"
					>
						<input
							type=""
							className="w-full text-gray-600 bg-transparent border-r outline-none"
							placeholder="資格を検索"
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
						/>
						<button className="outline-none">
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								className="w-4 h-4"
							/>
						</button>
					</form>
				</div>
				<div className=" md:px-10">
					<div className="flex justify-center w-full py-2 text-white border-t gap-2">
						<Link href="/privacy/">
							<a className="text-center md:w-1/5 hover:text-gray-400">
								プライバシーポリシー
							</a>
						</Link>
						<Link href="/company/">
							<a className="text-center md:w-1/5 hover:text-gray-400">
								運営会社
							</a>
						</Link>
						<Link href="/contact/">
							<a className="text-center md:w-1/5 hover:text-gray-400">
								お問い合わせ
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center py-1 text-xs text-white bg-slate-900">
				<Link href="/">
					<a>2022 Uguide</a>
				</Link>
			</div>
		</div>
	);
}
export default Footer;
