import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.palyload, ...currentPostList]
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (
    postUserId,
    postBody,
    postTitle,
    postReactions,
    postHashTags
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      palyload: {
        id: Date.now(),
        title: postBody,
        body: postTitle,
        reactions: postReactions,
        userId: postUserId,
        tags: postHashTags,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hii, Friends i am going to mumbai for vacation.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "enjoy", "travelling"],
  },
  {
    id: "2",
    title: "Pass Ho gaye",
    body: "Pass ho gaye......",
    reactions: 10,
    userId: "user-7",
    tags: ["graduate", "b-tech", "happy"],
  },
];
export default PostListProvider;
