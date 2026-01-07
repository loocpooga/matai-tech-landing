import { NextRequest, NextResponse } from "next/server";
import { getVectorStore } from "@/lib/vectorStoreDB";

type ChunkPayload = {
  content: string;
  source: string;
  page: number;
  file_id: string;
  file_modified_time: string;
};

/**
 * Validate webhook authentication
 */
function validateAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  const expectedToken = process.env.WEBHOOK_SECRET;

  if (!authHeader || !expectedToken) {
    console.log("⚠️  Missing authorization header or WEBHOOK_SECRET");
    return false;
  }

  const token = authHeader.replace("Bearer ", "");
  const isValid = token === expectedToken;

  if (!isValid) {
    console.log("❌ Invalid webhook token");
  }

  return isValid;
}

/**
 * POST /api/embeddings/ingest
 * Webhook endpoint for n8n to submit document chunks
 */
export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    // 1. Validate authentication
    if (!validateAuth(request)) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2. Parse request body
    const body = await request.json();
    const { chunks } = body;

    if (!chunks || !Array.isArray(chunks)) {
      return NextResponse.json(
        {
          error: "Invalid request format. Expected { chunks: [...] }",
          received: typeof chunks
        },
        { status: 400 }
      );
    }

    if (chunks.length === 0) {
      return NextResponse.json(
        { error: "No chunks provided" },
        { status: 400 }
      );
    }

    // 3. Validate chunk structure
    for (const chunk of chunks) {
      if (!chunk.content || !chunk.source || !chunk.file_id || !chunk.file_modified_time) {
        return NextResponse.json(
          {
            error: "Invalid chunk structure. Required fields: content, source, file_id, file_modified_time",
            example: {
              content: "text content",
              source: "filename.txt",
              page: 1,
              file_id: "google_drive_file_id",
              file_modified_time: "2025-01-05T12:00:00Z"
            }
          },
          { status: 400 }
        );
      }
    }

    console.log(`📦 Received ${chunks.length} chunks from ${chunks[0].source}`);

    const vectorStore = getVectorStore();

    // 4. Get file_id from first chunk (all chunks from same file)
    const fileId = chunks[0].file_id;

    // 5. Delete existing chunks for this file (version update)
    const deletedCount = await vectorStore.deleteFileChunks(fileId);

    // 6. Insert new chunks (batch process)
    const documentIds: string[] = [];
    let successCount = 0;
    let failedCount = 0;

    for (const chunk of chunks) {
      try {
        const id = await vectorStore.addDocument(chunk.content, {
          source: chunk.source,
          page: chunk.page,
          file_id: chunk.file_id,
          file_modified_time: chunk.file_modified_time,
        });
        documentIds.push(id);
        successCount++;
      } catch (error: any) {
        console.error(`❌ Failed to process chunk ${chunk.page}:`, error.message);
        failedCount++;
      }
    }

    // 7. Get total document count
    const totalDocs = await vectorStore.getCount();

    const duration = Date.now() - startTime;

    console.log(`✅ Ingestion complete: ${successCount}/${chunks.length} chunks processed in ${duration}ms`);

    return NextResponse.json({
      success: true,
      message: `Processed ${successCount} chunks from ${chunks[0].source}`,
      file: {
        source: chunks[0].source,
        file_id: fileId,
        file_modified_time: chunks[0].file_modified_time,
      },
      processing: {
        deletedChunks: deletedCount,
        insertedChunks: successCount,
        failedChunks: failedCount,
        totalChunks: chunks.length,
        durationMs: duration,
      },
      database: {
        totalDocuments: totalDocs,
      },
    });
  } catch (error: any) {
    const duration = Date.now() - startTime;
    console.error("❌ Ingest error:", error);

    return NextResponse.json(
      {
        error: "Failed to process chunks",
        details: error.message,
        durationMs: duration,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/embeddings/ingest
 * Health check endpoint for n8n monitoring
 */
export async function GET(request: NextRequest) {
  try {
    // Validate auth for health checks too
    if (!validateAuth(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const vectorStore = getVectorStore();
    const health = await vectorStore.healthCheck();

    if (!health.connected) {
      return NextResponse.json(
        {
          status: "unhealthy",
          database: "disconnected",
          error: health.error,
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: "healthy",
      database: "connected",
      documentCount: health.documentCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("❌ Health check failed:", error);

    return NextResponse.json(
      {
        status: "unhealthy",
        database: "disconnected",
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
