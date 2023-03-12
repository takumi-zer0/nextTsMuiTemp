import axios from "axios";

let query = `
query getAllShikakus {
  pageBy(pageId: 825) {
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
`;

let getShikaku = `
query getShikaku($id: Int!) {
	pageBy(pageId: $id) {
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
`;

export default async function handler(req, res) {
	let shikakuList = await axios.post("https://shopclip.jp/wp/graphql", {
		query: query,
	});

	shikakuList = shikakuList.data.data.pageBy.children.nodes;

	console.log("running...");

	// let tests = await axios.post("https://shopclip.jp/wp/graphql", {
	// 	query: getShikaku,
	// 	variables: {
	// 		id: 13322,
	// 	},
	// });

	// console.log("tests", tests.data.data.pageBy.children.nodes);

	let shikakuArr = [];

	for (let i = 0; i < shikakuList.length; i++) {
		let shikaku = await axios.post("https://shopclip.jp/wp/graphql", {
			query: getShikaku,
			variables: {
				id: shikakuList[i].pageId,
			},
		});
		shikakuArr.push(shikaku.data.data.pageBy.children.nodes);
	}


	res.status(200).json({ name: "John Doe" });

	// let shikakuListWithChildren = await Promise.all(
	// 	shikakuList.map(async (shikaku) => {
	// 		// let shikakuWithChildren = await axios.post(
	// 		// 	"https://shopclip.jp/wp/graphql",
	// 		// 	{
	// 		// 		query: getShikaku,
	// 		// 		variables: {
	// 		// 			id: shikaku.pageId,
	// 		// 		},
	// 		// 	}
	// 		// );
	// 		// return shikakuWithChildren.data.data.pageBy;
	// 		console.log("shikaku", shikaku.pageId);
	// 	})
	// );

	// console.log("shikakuListWithChildren", shikakuListWithChildren);
}
