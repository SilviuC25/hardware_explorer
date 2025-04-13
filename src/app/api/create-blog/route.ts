import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const generateSixDigitId = async () => {
  let id;
  let exists = true;

  while (exists) {
    id = Math.floor(100000 + Math.random() * 900000);
    const existing = await prisma.blog.findUnique({ where: { id } });
    exists = !!existing;
  }

  return id;
};

export async function POST(req: Request) {
  try {
    const { title, content, images } = await req.json();

    if (
      !title ||
      !content ||
      !images ||
      !Array.isArray(images) ||
      !images.every(img => img.url && img.title)
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    const generatedId = await generateSixDigitId();

    const newBlog = await prisma.blog.create({
      data: {
        id: generatedId,
        title,
        content,
        images: {
          create: images.map(img => ({
            url: img.url,
            title: img.title,
          })),
        },
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
