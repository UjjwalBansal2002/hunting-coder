

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] pt-10 justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl">Hunting Coder</h1>
        <p>A blog for hunting coders by a hunting coder</p>
        <div className="blogs ">
          <h2 className="text-3xl my-5">Popular Blogs</h2>
          <div className="blogItem bg-gray-900 p-4">
            <h1 className="my-2 font-semibold text-xl">How to learn javascript</h1>
            <p className="font-medium">it is a language is used to design website interactive</p>
          </div>

        </div>
      </main>



      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
