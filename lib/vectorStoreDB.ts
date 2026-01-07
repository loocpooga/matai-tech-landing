import OpenAI from "openai";
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Document = {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    source: string;
    page?: number;
    file_id: string;
    file_modified_time: string;
    timestamp: number;
  };
};

type DocumentMetadata = {
  source: string;
  page?: number;
  file_id: string;
  file_modified_time: string;
};

class PersistentVectorStore {
  private openai: OpenAI;
  private supabase: SupabaseClient;

  constructor() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY environment variable is required");
    }

    if (!process.env.SUPABASE_URL) {
      throw new Error("SUPABASE_URL environment variable is required");
    }

    if (!process.env.SUPABASE_SERVICE_KEY) {
      throw new Error("SUPABASE_SERVICE_KEY environment variable is required");
    }

    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    this.supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY,
      {
        auth: {
          persistSession: false,
        },
      }
    );
  }

  /**
   * Add a document with its embedding to the database
   */
  async addDocument(
    content: string,
    metadata: DocumentMetadata
  ): Promise<string> {
    console.log(`📝 Creating embedding for: ${metadata.source} (page ${metadata.page})`);

    const embedding = await this.createEmbedding(content);

    const { data, error } = await this.supabase
      .from('documents')
      .insert({
        content,
        embedding,
        source: metadata.source,
        page: metadata.page,
        file_id: metadata.file_id,
        file_modified_time: metadata.file_modified_time,
      })
      .select('id')
      .single();

    if (error) {
      console.error("❌ Failed to insert document:", error);
      throw error;
    }

    console.log(`✅ Added document chunk: ${data.id}`);
    return data.id;
  }

  /**
   * Delete all chunks for a specific file (used during updates)
   */
  async deleteFileChunks(file_id: string): Promise<number> {
    console.log(`🗑️  Deleting existing chunks for file: ${file_id}`);

    const { data, error } = await this.supabase
      .from('documents')
      .delete()
      .eq('file_id', file_id)
      .select('id');

    if (error) {
      console.error("❌ Failed to delete file chunks:", error);
      throw error;
    }

    const deletedCount = data?.length || 0;
    console.log(`✅ Deleted ${deletedCount} existing chunks`);
    return deletedCount;
  }

  /**
   * Create an embedding using OpenAI
   */
  private async createEmbedding(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return response.data[0].embedding;
  }

  /**
   * Perform vector similarity search
   */
  async search(query: string, topK: number = 3): Promise<Document[]> {
    console.log(`🔍 Search query: "${query}" (topK=${topK})`);

    const queryEmbedding = await this.createEmbedding(query);

    // Call the match_documents function in Supabase
    const { data, error } = await this.supabase.rpc('match_documents', {
      query_embedding: queryEmbedding,
      match_count: topK,
      match_threshold: 0.7,
    });

    if (error) {
      console.error("❌ Search failed:", error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.log("⚠️  No relevant documents found!");
      return [];
    }

    console.log(`✅ Found ${data.length} relevant documents`);

    return data.map((doc: any) => ({
      id: doc.id,
      content: doc.content,
      embedding: doc.embedding,
      metadata: {
        source: doc.source,
        page: doc.page,
        file_id: doc.file_id,
        file_modified_time: doc.file_modified_time,
        timestamp: new Date(doc.created_at).getTime(),
      },
    }));
  }

  /**
   * Get total document count
   */
  async getCount(): Promise<number> {
    const { count, error } = await this.supabase
      .from('documents')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error("❌ Failed to get document count:", error);
      throw error;
    }

    return count || 0;
  }

  /**
   * Health check - verify database connectivity
   */
  async healthCheck(): Promise<{
    connected: boolean;
    documentCount: number;
    error?: string;
  }> {
    try {
      const count = await this.getCount();
      return {
        connected: true,
        documentCount: count,
      };
    } catch (error: any) {
      return {
        connected: false,
        documentCount: 0,
        error: error.message,
      };
    }
  }
}

// Singleton pattern - reuse instance across serverless function invocations
declare global {
  var vectorStoreDB: PersistentVectorStore | undefined;
}

export function getVectorStore(): PersistentVectorStore {
  if (!global.vectorStoreDB) {
    console.log("🔄 Creating new PersistentVectorStore instance");
    global.vectorStoreDB = new PersistentVectorStore();
  }
  return global.vectorStoreDB;
}
