import initFirebase from "../../utils/initFirebase";

export default async function getPost(req, res) {
    const { admin, db } = initFirebase();
    const { id } = "99200801";
    const doc = await db.collection("posts").doc(id).get();
    const post = doc.data();
    res.status(200).json(post);
}
