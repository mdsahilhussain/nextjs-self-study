import React from "react";
import { getAllUser } from "@/utils/features";
import Link from "next/link";

const page = async () => {
  const users = await getAllUser();
  return (
    <div>
      <ul>
        {users?.map((item, index) => (
          <li key={index}>
            <Link href={`./user/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
