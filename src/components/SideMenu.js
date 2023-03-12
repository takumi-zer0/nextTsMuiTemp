import Link from "next/link";
import {
	faChartSimple,
	faGear,
	faHome,
	faMagic,
	faMagnifyingGlass,
	faMessage,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../pages/_app";

function Sidebar() {
	const { theme, setTheme } = useContext(ThemeContext);
	const router = useRouter();

	if (theme.sidebar) {
		return (
			<div>
				<div
					onClick={() => {
						setTheme({
							...theme,
							sidebar: false,
						});
					}}
					className={` min-h-screen fixed w-full z-20 
          ${theme.sidebar ? "bg-black/40" : "bg-transparent"}
          `}
				></div>
				<div className="fixed right-0 z-30 min-h-screen bg-white w-60 top-14">
					<button
						onClick={() => {
							router.push("/");
							setTheme({
								...theme,
								sidebar: false,
							});
						}}
						className="flex items-center w-full h-full px-5 py-4 space-x-4 hover:bg-gray-200"
					>
						<FontAwesomeIcon icon={faHome} className="w-5 h-5" />
						<p>ホーム</p>
					</button>
					<button
						onClick={() => {
							setTheme({
								...theme,
								sidebar: false,
							});
							router.push("/search/");
						}}
						className="flex items-center w-full px-5 py-4 space-x-4 hover:bg-gray-200 "
					>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className="w-5 h-5"
						/>
						<p>資格検索</p>
					</button>
					<div className="rounded-full mx-2 my-2 h-[1px] bg-gray-200"></div>
					<div className="flex flex-col gap-1">
						<Link href="/privacy/" passHref>
							<a className="px-5 text-xs text-gray-500 hover:text-gray-900" target={"_blank"}>
								プライバシーポリシー
							</a>
						</Link>
						<Link href="/company/" passHref>
							<a className="px-5 text-xs text-gray-500 hover:text-gray-900" target="_blank">
								運営会社
							</a>
						</Link>
						<Link href="/contact/" passHref>
							<a className="px-5 text-xs text-gray-500 hover:text-gray-900" target={"_blank"}>
			お問い合わせ
							</a>
						</Link>
					</div>
				</div>
			</div>
		);
	}
	return null;
}

export default Sidebar;
