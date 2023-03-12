import { useEffect, useState, useContext } from "react";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import SideMenu from "./SideMenu";

import { ThemeContext } from "../pages/_app";

function Header({ query }) {
	const [search, setSearch] = useState(query);
	const router = useRouter();

	const { theme, setTheme } = useContext(ThemeContext);

	const [show, setShow] = useState(false);

	useEffect(() => {
		setSearch(query);
	}, [query]);

	return (
		<div>
			<SideMenu show={show} setShow={setShow} />
			<div className="z-20 flex items-center justify-between w-full px-5 shadow bg-stone-50 md:px-10 h-14 gap-2">
				<Link href={"/"}>
					<a className="text-2xl font-bold text-blue-500">Uguide</a>
				</Link>
				<div
					onClick={() => {
						setTheme({ sidebar: !theme.sidebar });
					}}
					className="hover:cursor-pointer"
				>
					<FontAwesomeIcon
						icon={faBars}
						className="w-6 h-6 pt-1 text-gray-600"
					/>
				</div>
			</div>
		</div>
	);
}
export default Header;
