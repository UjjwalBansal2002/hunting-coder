// "use client"

// import Link from "next/link";
// import React from "react";
// import { useEffect, useState } from "react";

// async function fetchBlogBySlug() {
//   // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
//   console.log(apiUrl);
//   if (!apiUrl) {
//     throw new Error("API URL is not defined. Please check your environment variables.");
// }

//   console.log('Fetching from:', apiUrl);

//   try {
//     const res = await fetch(`${apiUrl}/api/blogs`, { next: { revalidate: 10 } });
//     if (!res.ok) {
//       const errorDetails = await res.text();
//       throw new Error(`Failed to fetch data: ${res.status} - ${errorDetails}`);
//     }
//     return await res.json();
//   } catch (error) {
//     console.error('Error in fetch:', error);
//     throw new Error('Error fetching blogs');
//   }
// }

// function Page() {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(async () => {
//     try {
//       const data = await fetchBlogBySlug();
//       setBlogs(data);
//     } catch (error) {
//       console.error('Error loading blogs:', error); // Log the error
//       setError(error.message); // Set the error message to display
//     }

//   }, []);

//   if (error) {
//     return <div className="error-message text-red-600">{error}</div>;
//   }

//   return (
//     <div className="blogs flex justify-center flex-col items-center">
//       <h2 className="text-3xl my-5">Popular Blogs</h2>
//       {blogs.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         blogs.map((blogItem) => (
//           <div
//             className="blogItem bg-gray-900 p-4 cursor-pointer w-[50vw]"
//             key={blogItem.slug}
//           >
//             <Link href={`/blogpost/${blogItem.slug}`}>
//               <h1 className="my-2 font-semibold text-xl">{blogItem.title}</h1>
//               <p className="font-medium">
//                 {blogItem.description.substr(0, 200)}{" "}
//                 <span className="text-blue-800">readMore...</span>
//               </p>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Page;


"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

async function fetchBlogBySlug() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  console.log(apiUrl);
  if (!apiUrl) {
    throw new Error("API URL is not defined. Please check your environment variables.");
  }

  console.log('Fetching from:', apiUrl);

  try {
    const res = await fetch(`${apiUrl}/api/blogs`, { next: { revalidate: 10 } });
    if (!res.ok) {
      const errorDetails = await res.text();
      throw new Error(`Failed to fetch data: ${res.status} - ${errorDetails}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Error in fetch:', error);
    throw new Error('Error fetching blogs');
  }
}

function Page() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => { // Define an async function within useEffect
      try {
        const data = await fetchBlogBySlug();
        setBlogs(data);
      } catch (error) {
        console.error('Error loading blogs:', error); // Log the error
        setError(error.message); // Set the error message to display
      }
    };

    loadBlogs(); // Call the async function
  }, []);

  if (error) {
    return <div className="error-message text-red-600">{error}</div>;
  }

  return (
    <div className="blogs flex justify-center flex-col items-center">
      <h2 className="text-3xl my-5">Popular Blogs</h2>
      {blogs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        blogs.map((blogItem) => (
          <div
            className="blogItem bg-gray-900 p-4 cursor-pointer w-[50vw]"
            key={blogItem.slug}
          >
            <Link href={`/blogpost/${blogItem.slug}`}>
              <h1 className="my-2 font-semibold text-xl">{blogItem.title}</h1>
              <p className="font-medium">
                {blogItem.description.substr(0, 200)}{" "}
                <span className="text-blue-800">readMore...</span>
              </p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
