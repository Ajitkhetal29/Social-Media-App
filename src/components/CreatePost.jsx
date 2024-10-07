import { useRef } from "react";

const CreatePost = () => {
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postHashTags = useRef();

  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            ref={userId}
            type="text"
            className="form-control"
            id="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Post Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBody}
            aria-rowcount={10}
            aria-colcount={10}
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No Of Reactions
          </label>
          <input
            ref={postReactions}
            type="text"
            className="form-control"
            id="reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Your HashTag Here
          </label>
          <input
            ref={postHashTags}
            type="text"
            className="form-control"
            id="tags"
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
