import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

// export const dynamic = "force-dynamic" // disable caching features --> dynamic route 
// export const revalidate = 0;

export default async function Home() {
  const snippets = await prisma.snippet.findMany();



  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 ">📌 Code Snippets</h1>
        <Link href="/snippet/new">
          <Button variant={'default'} className="cursor-pointer text-white px-6 py-2 rounded-lg shadow-md transition">
            + New Snippet
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="bg-white p-5 shadow-lg rounded-xl border hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {snippet.title}
            </h2>
            <div className="mt-4 flex justify-between items-center">
              <Link href={`/snippet/${snippet.id}`}>
                <Button variant={'outline'} className="cursor-pointer text-black  px-4 py-2 rounded-lg transition">
                  View Snippet
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {snippets.length === 0 && (
        <div className="text-center mt-10">
          <h2 className="text-gray-500 text-lg">
            No snippets available. Add a new one!
          </h2>
        </div>
      )}
    </div>
  );
}
