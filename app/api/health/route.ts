import { NextRequest, NextResponse } from "next/server";
import { getVectorStore } from "@/lib/vectorStoreDB";

/**
 * GET /api/health
 * Public health check endpoint for monitoring system status
 */
export async function GET(request: NextRequest) {
  try {
    const vectorStore = getVectorStore();

    // Test database connectivity and get document count
    const startTime = Date.now();
    const health = await vectorStore.healthCheck();
    const healthCheckDuration = Date.now() - startTime;

    if (!health.connected) {
      return NextResponse.json(
        {
          status: "unhealthy",
          database: {
            connected: false,
            error: health.error,
          },
          metrics: {
            documentCount: 0,
            healthCheckDurationMs: healthCheckDuration,
          },
          timestamp: new Date().toISOString(),
        },
        { status: 500 }
      );
    }

    // Perform a test search to verify vector operations
    let searchWorking = true;
    let searchDuration = 0;

    try {
      const searchStart = Date.now();
      await vectorStore.search("test", 1);
      searchDuration = Date.now() - searchStart;
    } catch (error) {
      searchWorking = false;
      console.error("❌ Health check search failed:", error);
    }

    return NextResponse.json({
      status: "healthy",
      database: {
        connected: true,
        documentCount: health.documentCount,
      },
      operations: {
        search: searchWorking ? "working" : "failed",
      },
      metrics: {
        healthCheckDurationMs: healthCheckDuration,
        searchDurationMs: searchDuration,
      },
      environment: {
        nodeEnv: process.env.NODE_ENV,
        hasOpenAIKey: !!process.env.OPENAI_API_KEY,
        hasSupabaseUrl: !!process.env.SUPABASE_URL,
        hasSupabaseKey: !!process.env.SUPABASE_SERVICE_KEY,
        hasWebhookSecret: !!process.env.WEBHOOK_SECRET,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("❌ Health check failed:", error);

    return NextResponse.json(
      {
        status: "unhealthy",
        database: {
          connected: false,
          error: error.message,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
