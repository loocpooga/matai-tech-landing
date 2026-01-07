import { NextRequest, NextResponse } from "next/server";
import { getVectorStore } from "@/lib/vectorStore";
import { chunkText, extractTextFromTxt, cleanText } from "@/lib/documentProcessor";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Check file type
    const fileName = file.name.toLowerCase();
    if (!fileName.endsWith(".txt")) {
      return NextResponse.json(
        { error: "Only .txt files are supported in MVP" },
        { status: 400 }
      );
    }

    // Read file content
    const buffer = Buffer.from(await file.arrayBuffer());
    const text = extractTextFromTxt(buffer);
    const cleanedText = cleanText(text);

    // Split into chunks
    const chunks = chunkText(cleanedText, 1000, 200);

    // Add to vector store
    const vectorStore = getVectorStore();
    const documentIds: string[] = [];

    for (let i = 0; i < chunks.length; i++) {
      const id = await vectorStore.addDocument(chunks[i], {
        source: file.name,
        page: i + 1,
      });
      documentIds.push(id);
    }

    const totalDocs = vectorStore.getCount();

    return NextResponse.json({
      success: true,
      message: `Uploaded and processed ${chunks.length} chunks from ${file.name}`,
      documentIds,
      chunkCount: chunks.length,
      totalDocuments: totalDocs,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to process file" },
      { status: 500 }
    );
  }
}
