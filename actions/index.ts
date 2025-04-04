"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 4) {
      return { message: "Title is required " };
    }
    if (typeof code !== "string" || title.length < 8) {
      return { message: "Code is required " };
    }

    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    revalidatePath("/");
    // throw new Error
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Some Internal Server Error" };
    }
  }

  redirect("/");
}

export const SaveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  revalidatePath(`/snippet/${id}`)
  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
  redirect("/");
};
