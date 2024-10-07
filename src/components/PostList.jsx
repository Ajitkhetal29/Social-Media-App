import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";

const PostList = () => {
  const { postlist } = useContext(PostListData);

  return (
    <>
     {postlist.map((post) => (<Post key={post.id}  post={post}></Post>) )}
    </>
  );
};
export default PostList;
