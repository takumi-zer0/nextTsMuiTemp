import { useState, useEffect } from "react";
import Script from "next/script";
import Header from "../components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";

function Search() {
	const [search, setSearch] = useState("");
	const router = useRouter();
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(async () => {
		if (router.isReady) {
			const search = router.query.q;
			setSearch(search);
			setLoading(true);
			let result = await axios.get("/api/searchPost", {
				params: {
					query: search,
				},
			});
			setResult(result.data);
			setLoading(false);
		}
	}, [router]);

	return (
		<div className="flex flex-col w-full min-h-screen">
			<Header query={search} />

			<div className="flex flex-col items-center w-full py-5 mt-14">
				<div className="relative flex flex-col items-center justify-center w-full px-2 overflow-hidden md:w-1/2 h-44 bg-blue-400/60 md:rounded-sm">
					<div className="absolute w-full h-full -z-10">
						<Image
							src={"/back2.jpg"}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<h2 className="text-2xl text-white pb-3">資格検索</h2>
					<p>検索ボックスが表示されない場合は更新してください。</p>
					<Script
						async
						src="https://cse.google.com/cse.js?cx=2147eb6875f004dce"
					></Script>
					<div className="gcse-searchbox-only"></div>
				</div>
			</div>

			<div className="flex justify-center w-full min-h-[50vh]">
				<div className="grid w-full gap-2 px-5 py-2 md:w-[60%] ">
					<div id="search_box"></div>
					<Script
						async
						src="https://cse.google.com/cse.js?cx=2147eb6875f004dce"
					></Script>
					<div className="gcse-searchresults-only"></div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Search;
