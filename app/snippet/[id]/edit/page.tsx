export const runtime = "nodejs";
import EditSnippetPage from "@/components/ui/EditSnippetPage";
import { prisma } from "@/lib/prisma";
import { FC } from "react";

interface EditPageSnippetProps {
  params: { id: string };
}

const EditPageSnippet: FC<EditPageSnippetProps> = async ({ params }) => {
  const id = Number(params.id);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) return <h1>Snippet Not Found</h1>;

  return <EditSnippetPage snippet={snippet} />;
};

export default EditPageSnippet;
