import { useEffect } from "react";

function PostsContainer(props: any) {
  useEffect(() => {
    props.fetchPost();
  }, []);
  return (
    <div style={{ width: "100%" }}>
      this is posts container
      {
        props.loading ? <div>loading...</div> : (
          <div style={{ overflow: "hidden", width: "100%", wordBreak: "break-word" }}>
            <pre>
              {JSON.stringify(props.posts, null, 2)}
            </pre>
          </div>
        )
      }

    </div>
  )
}

export default PostsContainer;
