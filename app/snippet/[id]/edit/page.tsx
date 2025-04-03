import EditSnippetPage from "@/components/ui/EditSnippetPage";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditPageSnippet = async ({ params }: { params: { id: string } }) => {
  // Convert `id` only if your database stores it as a number
  const id = Number(params.id); // Use Number() instead of parseInt()

  const snippet = await prisma.snippet.findUnique({
    where: { id }, // Ensure `id` type matches Prisma schema
  });

  if (!snippet) return <h1>Snippet Not Found</h1>;

  return <EditSnippetPage snippet={snippet} />;
};

export default EditPageSnippet;
