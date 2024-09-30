"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function page() {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    console.log("hello useeffect");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setblogs(parsed);
      });
  }, []);

  return (
    <div className="blogs flex justify-center flex-col items-center">
      <h2 className="text-3xl my-5">Popular Blogs</h2>
      {blogs.map((blogItem) => {
        return (
          <div
            className="blogItem bg-gray-900 p-4 cursor-pointer w-[50vw]"
            key={blogItem.title}
          >
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h1 className="my-2 font-semaibold text-xl">{blogItem.title}</h1>
              <p className="font-medium">
                {blogItem.description.substr(0, 200)}{" "}
                <span className="text-blue-800">readMore...</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default page;
