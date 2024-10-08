import { useContext, useRef } from "react";
import { PostList } from "../store/Post-List-Store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionselemet = useRef();
  const postHashTagselement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postUserId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionselemet.current.value;
    const postHashTags = postHashTagselement.current.value.split(" ");

    addPost(postUserId, postBody, postTitle, postReactions, postHashTags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionselemet.current.value = "";
    postHashTagselement.current.value = "";
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userIdElement" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userIdElement"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitleElement" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="postTitleElement"
            placeholder="Enter Post Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postBodyElement" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            aria-rowcount={10}
            aria-colcount={10}
            type="text"
            className="form-control"
            id="postBodyElement"
            placeholder="Tell us more.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postReactionselemet" className="form-label">
            No Of Reactions
          </label>
          <input
            ref={postReactionselemet}
            type="text"
            className="form-control"
            id="postReactionselemet"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postHashTagselement" className="form-label">
            Enter Your HashTag Here
          </label>
          <input
            ref={postHashTagselement}
            type="text"
            className="form-control"
            id="postHashTagselement"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
