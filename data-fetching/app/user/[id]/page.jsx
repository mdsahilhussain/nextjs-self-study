import React, { Suspense } from "react";
import { getUserDetail } from "@/utils/features";
import Posts from "./posts";
import { notFound } from "next/navigation";

//! Starting four user's data fetch throug SSG & reset of the SSR
// export const dynamicParams = false;
export const generateStaticParams = () => {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
};

//! Change the title accourding the user name.
export const generateMetadata = async ({ params }) => {
  const userData = await getUserDetail(params.id);
  return {
    title: `${userData.name}'s Profile`,
  };
};

//! Change the title .
// export const metadata = {
//   title: "User",
// };

const page = async ({ params }) => {
  const userData = await getUserDetail(params?.id);
  if (!userData.id) {
    return notFound();
  }
  return (
    <React.Fragment>
      <div>
        <h1>{userData?.name}</h1>
        <h4>{userData?.email}</h4>
      </div>

      <Suspense fallback={<div>Loading... </div>}>
        <Posts id={params.id} />
      </Suspense>
    </React.Fragment>
  );
};

export default page;
