import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";    

interface Props {
  params: {
    id: string;
  };
}

const SnippetDetailPage = async ({ params }: Props) => {
  const id = Number(params?.id);

  if (!id || isNaN(id)) {
    return <h1 className="text-red-500 font-bold">Invalid Snippet ID</h1>;
  }

  await new Promise((r) => setTimeout(r, 1000));

  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-2xl">
        <div className="flex items-center justify-between font-bold text-xl">
          <h1>{snippet.title}</h1>
          <div className="flex items-center gap-3">
            <Link href={`/snippet/${snippet.id}/edit`}>
              <Button className="cursor-pointer" variant="default">
                EDIT
              </Button>
            </Link>
            <form action={deleteSnippetAction}>
              <Button
                className="cursor-pointer"
                variant="destructive"
                type="submit"
              >
                DELETE
              </Button>
            </form>
          </div>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded-xl mt-6">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetDetailPage;


export const generateStaticParams = async()=>{
  const snippets = await prisma.snippet.findMany();

  return  snippets.map((snippet)=>(
    {id:snippet.id.toString()}
  ))
}
