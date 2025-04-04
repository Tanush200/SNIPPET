"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { prisma } from "@/lib/prisma";
// import { redirect } from "next/navigation";
import React, { useActionState } from "react";
import * as actions from "@/actions"
const CreateSnippetPage = () => {
const [formStateData,kuchbhi] = useActionState(actions.createSnippet,{message:""})

  return (
    <form action={kuchbhi}>
      <div>
        <h1 className="text-2xl font-bold text-center mb-6 bg-gray-300 p-2 rounded-2xl">
          🚀 Create a New Snippet
        </h1>
        <Label >Title</Label>
        <Input className="my-3" type="text" name="title" id="title"></Input>
      </div>
      <div>
        <Label>Code</Label>
        <Textarea className="my-3" name="code" id="code" />
      </div>
      {formStateData.message && <div className="bg-red-300 border-2 border-red-600 p-2 rounded-xl">{formStateData.message}</div>}
      <Button type="submit" className="my-8 cursor-pointer">
        Create New Snippet
      </Button>
    </form>
  );
};

export default CreateSnippetPage;
