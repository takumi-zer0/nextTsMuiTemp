import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function SearchBar({ query }) {
	const [search, setSearch] = useState("");
	const router = useRouter();

	useEffect(() => {
		setSearch(query);
	}, [query]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				router.push(`/search/?q=${search}`);
			}}
			className="flex items-center px-5 py-2 mt-4 text-gray-600 bg-gray-100 rounded-full gap-2"
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
				<FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
			</button>
		</form>
	);
}
export default SearchBar;
