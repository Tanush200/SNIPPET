import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <div>
        <h1 className="text-2xl font-bold text-center mb-6 bg-gray-300 p-2 rounded-2xl">
          🚀 Create a New Snippet
        </h1>
        <Label >Title</Label>
        <Input required className="my-3" type="text" name="title" id="title"></Input>
      </div>
      <div>
        <Label>Code</Label>
        <Textarea required className="my-3" name="code" id="code" />
      </div>
      <Button type="submit" className="my-8 cursor-pointer">
        Create New Snippet
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
