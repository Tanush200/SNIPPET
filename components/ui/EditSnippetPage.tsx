"use client"
import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react'
import type { Snippet } from "@prisma/client";
import { Button } from './button';
import { SaveSnippet } from '@/actions';


const EditSnippetPage = ({snippet}:{snippet:Snippet}) => {
    const [code , setCode] = useState(snippet.code)
    const SaveSnippetAction = async () => {
      await SaveSnippet(snippet.id, code);
    };



  return (
    <div>
      <form
        action={SaveSnippetAction}
        className="flex items-center justify-between mb-5"
      >
        <h1 className="font-bold text-xl bg-gray-200 p-3 rounded-xl">
          Your Code Editor :
        </h1>
        <Button type="submit" className='cursor-pointer'>Save</Button>
      </form>
      <Editor
        className="mt-3"
        height="60vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(newValue) => setCode(newValue || "")}
        theme="vs-dark"
      />
    </div>
  );
}

export default EditSnippetPage
