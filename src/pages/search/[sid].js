import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Post from "../../components/Post";

function Search() {
	const [search, setSearch] = useState("");
	const router = useRouter();
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(async () => {
		if (router.isReady) {
			const search = router.query.sid;
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
		<div className="flex flex-col w-full bg-gray-200 min-h-screen">
			<div className="w-full h-[21vh] bg-blue-400/70 relative flex justify-around items-center flex-col md:flex-row text-white gap-4">
				<div className="absolute w-full h-full -z-10">
					<Image src={"/back.jpg"} layout="fill" objectFit="cover" />
				</div>
				<h2 className="text-2xl font-bold text-white md:text-5xl">
					Uguide
				</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						router.push(`/search/${search}`);
					}}
					className="flex items-center px-5 py-2 text-gray-600 bg-gray-100 rounded-full gap-2"
				>
					<input
						type=""
						className="w-full w-[30vw] text-gray-600 bg-transparent border-r outline-none"
						placeholder="資格を検索"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button className="outline-none">
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className="w-5 h-5"
						/>
					</button>
				</form>
			</div>

			<div className="w-full flex justify-center">
				<div className="flex flex-col  w-full gap-4 px-5 py-2 md:w-[70%] ">
					{loading ? (
						<div className="flex justify-center items-center">
							<h1>loading</h1>
						</div>
					) : (
						result.map((item, index) => {
							return (
								<Post
									key={index}
									title={item.title}
									pageId={item.pageId}
								/>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
}
export default Search;
