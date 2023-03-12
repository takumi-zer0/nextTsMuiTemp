import axios from "axios";

let query = `
query MyQuery3 ( $query: String ) {
  pages(where: {search: $query}) {
    nodes {
      title
      pageId
		excerpt
		date
		featuredImage {
			node {
				mediaItemUrl
				}
		}
    }
  }
}
`;

export default async function handler(req, res) {
	let shikakuList = await axios.post("https://shopclip.jp/wp/graphql", {
		query: query,
		variables: {
			query: req.query.query,
		},
	});

	let data = shikakuList.data.data.pages.nodes;

	//change date format
	data.forEach((item) => {
		let date = new Date(item.date);
		item.date = date.toLocaleDateString();

		let featuredImage = item.featuredImage?.node.mediaItemUrl || "";
		if (featuredImage) {
			//change shopclip to Uguide
			featuredImage = featuredImage.replace("shopclip", "uguide");
		}
		item.url = featuredImage;
	});

	res.status(200).json(shikakuList.data.data.pages.nodes);
}
