"use client";
import React from "react";
import { useParams } from "next/navigation";

function Page() {
  const { slug } = useParams(); // Use `useParams` to access dynamic route parameters

  return (
    <div className="w-full flex justify-center items-center  mt-10">
      <div className="w-3/6">
        <h2 className="text-center font-semibold text-2xl mb-5">Title of the page is {slug}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          voluptates cumque excepturi quia. Repudiandae fuga officiis atque
          minus doloribus deserunt in eaque numquam, est neque dolore dolorum
          tempore eum rerum! Sapiente, accusamus!
        </p>
      </div>
    </div>
  );
}

export default Page;
