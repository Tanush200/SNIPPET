import { Metadata } from "next";
import EditSnippetPage from "@/components/ui/EditSnippetPage";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";


interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number(params.id);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  return {
    title: snippet ? `Edit ${snippet.title}` : "Snippet Not Found",
  };
}

export default async function EditPageSnippet({ params }: Props) {
  const id = Number(params.id);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Snippet Not Found</h1>
      </div>
    );
  }

  return <EditSnippetPage snippet={snippet} />;
}
