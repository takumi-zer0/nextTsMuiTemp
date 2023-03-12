import { SugPostContext } from "../pages/_app";
import axios from "axios";
import { useContext, useEffect } from "react";
import PostCardMini from "./PostCardMini";

let query = `
query NewQuery ($id: Int!) {
  pageBy(pageId: $id) {
    children(first: 5) {
      nodes {
        ... on Page {
          id
          title
          pageId
			featuredImage {
            node {
				mediaItemUrl
            }
          }
        }
      }
    }
  }
}
`;

function Suggestions({ pageId }) {
	const { sugPostList, setSugPostList } = useContext(SugPostContext);

	useEffect(() => {
		// get content with graphql
		// setSugPostList
		axios
			.post("https://shopclip.jp/wp/graphql", {
				query: query,
				variables: {
					id: Number(pageId),
				},
			})
			.then((res) => {
				setSugPostList(res.data.data.pageBy.children.nodes);
			})
			.catch((err) => {
				console.log("Error");
			});
	}, []);

	return (
		<div className="flex flex-col py-3 border-y">
			<h2 className="pb-2 text-lg border-b border-blue-300">関連記事</h2>
			<div>
				{sugPostList &&
					sugPostList.map((post) => (
						<PostCardMini
							pageId={post.pageId}
							key={post.pageId}
							title={post.title}
							image={
								post.featuredImage &&
								post.featuredImage.node?.mediaItemUrl
							}
						/>
					))}
			</div>
		</div>
	);
}

export default Suggestions;
