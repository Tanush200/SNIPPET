import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import * as actions from '@/actions'
import { notFound } from 'next/navigation'

const SnippetDetailPage = async ({params}:{params:{id:string}}) => {

if (!params.id) {
  return <h1>Invalid Snippet ID</h1>;
}

    const id = parseInt(params.id, 10);

await new Promise((r)=>setTimeout(r,1000))

    const snippets = await prisma.snippet.findUnique({
        where:{
            id
        }
    })

    if (!snippets) notFound()

  const deleteSnippetAction = snippets
    ? actions.deleteSnippet.bind(null, snippets.id)
    : undefined;


  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-2xl">
        <div className="flex items-center justify-between font-bold text-xl">
          <h1>{snippets?.title}</h1>
          <div className="flex items-center justify-between gap-3">
            <Link href={`/snippet/${snippets.id}/edit`}>
              <Button className="cursor-pointer" variant={"default"}>
                EDIT
              </Button>
            </Link>
            <form action={deleteSnippetAction}>
              <Button
                className="cursor-pointer"
                variant={"destructive"}
                type="submit"
              >
                DELETE
              </Button>
            </form>
          </div>
        </div>
      </div>
      <pre className="p-3 bg-gray-200 rounded-xl mt-6">
        <code>{snippets.code}</code>
      </pre>
    </div>
  );
}

export default SnippetDetailPage
