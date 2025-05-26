import Image from "next/image";

// Mock data fetching function (replace with your actual API or database call)
async function fetchPosts() {
  return [
    {
      slug: "post-1",
      title: "First Post",
      date: "2025-05-26",
      author: "John Doe",
      summary: "This is the summary of the first post.",
      tags: ["Tech", "Next.js"],
    },
    {
      slug: "post-2",
      title: "Second Post",
      date: "2025-05-25",
      author: "Jane Doe",
      summary: "This is the summary of the second post.",
      tags: ["React", "JavaScript"],
    },
  ];
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        <main className="max-w-2xl mx-auto py-10">
          <h1 className="text-4xl font-bold mb-8 text-cyan-500">
            Sri Lanka Tech Blog
          </h1>
          <ul>
            {posts.map((post) => (
              <li
                key={post.slug}
                className="mb-8 border-b border-cyan-100/10 pb-4"
              >
                <a
                  href={`/posts/${post.slug}`}
                  className="text-2xl text-cyan-400 font-semibold hover:underline"
                >
                  {post.title}
                </a>
                <div className="text-gray-400 text-sm">
                  {post.date} — {post.author}
                </div>
                <p className="mt-2 text-gray-300">{post.summary}</p>
                <div className="mt-2">
                  {post.tags &&
                    post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-cyan-800 text-cyan-100 px-2 py-1 rounded text-xs mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </main>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}




