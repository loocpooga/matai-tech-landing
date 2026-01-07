// Simple in-memory vector store for MVP
// Later: upgrade to Pinecone/Qdrant for production

import OpenAI from "openai";

export type Document = {
  id: string;
  content: string;
  embedding: number[];
  metadata: {
    source: string;
    page?: number;
    timestamp: number;
  };
};

class SimpleVectorStore {
  private documents: Document[] = [];
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  // Add document to store
  async addDocument(content: string, metadata: { source: string; page?: number }) {
    const embedding = await this.createEmbedding(content);

    const doc: Document = {
      id: `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      content,
      embedding,
      metadata: {
        ...metadata,
        timestamp: Date.now(),
      },
    };

    this.documents.push(doc);
    console.log(`✓ Added document: ${metadata.source} (Total: ${this.documents.length} docs)`);
    return doc.id;
  }

  // Create embedding using OpenAI
  private async createEmbedding(text: string): Promise<number[]> {
    const response = await this.openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return response.data[0].embedding;
  }

  // Calculate cosine similarity between two vectors
  private cosineSimilarity(a: number[], b: number[]): number {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  }

  // Search for relevant documents
  async search(query: string, topK: number = 3): Promise<Document[]> {
    console.log(`🔍 Search query: "${query}" (${this.documents.length} docs in store)`);

    if (this.documents.length === 0) {
      console.log("⚠️  No documents in store!");
      return [];
    }

    const queryEmbedding = await this.createEmbedding(query);

    const resultsWithScores = this.documents
      .map((doc) => ({
        doc,
        similarity: this.cosineSimilarity(queryEmbedding, doc.embedding),
      }))
      .sort((a, b) => b.similarity - a.similarity);

    const results = resultsWithScores
      .slice(0, topK)
      .map((result) => result.doc);

    console.log(`✓ Found ${results.length} relevant docs (top similarity: ${resultsWithScores[0]?.similarity.toFixed(3)})`);

    return results;
  }

  // Get all documents
  getAllDocuments(): Document[] {
    return this.documents;
  }

  // Clear all documents
  clear() {
    this.documents = [];
  }

  // Get document count
  getCount(): number {
    return this.documents.length;
  }
}

// Use Node.js global to persist across Next.js hot reloads
declare global {
  var vectorStore: SimpleVectorStore | undefined;
}

export function getVectorStore(): SimpleVectorStore {
  if (!global.vectorStore) {
    console.log("🔄 Creating new vector store instance");
    global.vectorStore = new SimpleVectorStore();
  }
  return global.vectorStore;
}
