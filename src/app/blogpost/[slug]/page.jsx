
async function fetchBlogBySlug(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getblogs?slug=${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function Page({params}) {
  console.log(params);
  
  const { slug } = params; // Use `useParams` to get `slug` parameter
  const blog = await fetchBlogBySlug(slug); // Fetch blog data on the server



  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-4/5 lg:w-3/5 xl:w-2/5 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-center font-bold text-3xl mb-6 text-gray-800">
          {blog.title}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default Page;
