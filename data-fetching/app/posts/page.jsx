import React from "react";
import { getAllPost } from "../../utils/features";

const page = async () => {
  const allPostData = await getAllPost();
  return (
    <div>
      <ul>
        {allPostData?.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
