"use client";

import { useState } from "react";

const PostUpvoteButton = ({ upvotes, children }) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);

  return (
    <>
      {children}
      <button onClick={() => setUpvoteCount(upvoteCount + 1)}>
        {upvoteCount} Upvotes
      </button>
    </>
  );
};

export default PostUpvoteButton;
