import React from "react";
import { getUserDetail, getUserPost } from "@/utils/features";
import Posts from "./posts";

const page = async ({ params }) => {
  const userData = await getUserDetail(params.id);
  const post = await getUserPost(params.id);
  return (
    <React.Fragment>
      <div>
        <h1>{userData.name}</h1>
        <h4>{userData.email}</h4>
      </div>
      <Posts />
    </React.Fragment>
  );
};

export default page;
