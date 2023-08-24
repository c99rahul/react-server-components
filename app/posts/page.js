import { Suspense } from "react";
import PostList from "../components/PostList/PostList";

const Index = async () => {
  return (
    <>
      <Suspense fallback={<h2 className="post-loader">Loading...</h2>}>
        <PostList />
      </Suspense>
    </>
  );
};

export default Index;
