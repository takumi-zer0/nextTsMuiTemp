import axios from "axios";

let query = `
query getAllShikakus {
	pageBy(pageId: 825) {
		children(first: 100) {
			nodes {
				... on Page {
					title
					pageId
					children(first: 100) {
						nodes {
							... on Page {
								title
								pageId
								children(first: 100) {
									nodes {
										... on Page {
											title
											pageId
										}
									}
								}
							}
						}
					}
				}
			}
		}
  }
}
`;

export default async function handler(req, res) {
	let shikakuList = await axios.post("https://shopclip.jp/wp/graphql", {
		query: query,
	});


	//send as JSON
	res.status(200).json(shikakuList.data.data);
}
