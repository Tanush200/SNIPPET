import EditSnippetPage from '@/components/ui/EditSnippetPage';
import { prisma } from '@/lib/prisma';
import React from 'react'



const EditPageSnippet = async ({
  params,
}: {
  params:{ id: string };
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });

  if (!snippet) return <h1>Snippet Not Found</h1>;

  return <EditSnippetPage snippet={snippet} />;
};

export default EditPageSnippet; 
