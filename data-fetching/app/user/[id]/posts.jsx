import React from "react";
import { getUserPost } from "@/utils/features";

const Posts = async ({ id }) => {
  const singleUserPosts = await getUserPost(id);

  return (
    <div style={{ marginTop: "1em" }}>
      <ul>
        {singleUserPosts?.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
