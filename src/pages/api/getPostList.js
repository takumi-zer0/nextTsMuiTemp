import axios from "axios";

let query = `
query MyQuery3 ($id: Int!) {
	pageBy (pageId: $id) {
		title
		children {
			nodes {
				... on Page {
					title
					pageId
				}
			}


		}
	}
}
`;

export default async function handler(req, res) {
	const id = Number(req.query.id);

	let shikakuList = await axios.post("https://shopclip.jp/wp/graphql", {
		query: query,
		variables: {
			id: id,
		},
	});


	res.status(200).json(shikakuList.data.data.pageBy);
}
