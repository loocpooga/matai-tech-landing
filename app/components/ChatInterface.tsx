"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b px-4 py-3 bg-gradient-to-r from-white via-primary-50 to-white">
        <div>
          <h2 className="font-bold text-lg bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Ask Me Anything
          </h2>
          <p className="text-xs text-gray-600">About Matai Tech</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="text-center mt-8">
            <div className="bg-gradient-to-br from-primary-50/50 to-accent-50/50 rounded-xl p-6 mb-4">
              <div className="text-primary-600 text-4xl mb-3">👋</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Hi! I'm your AI assistant
              </h3>
              <p className="text-sm text-gray-600">
                Ask me about Matai Tech's services, pricing, or process
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Try asking:</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setInput("What services do you offer?")}
                  className="bg-white border border-primary-200 hover:border-primary-600 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-primary-600 transition"
                >
                  What services do you offer?
                </button>
                <button
                  onClick={() => setInput("How does your pricing work?")}
                  className="bg-white border border-primary-200 hover:border-primary-600 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-primary-600 transition"
                >
                  How does your pricing work?
                </button>
                <button
                  onClick={() => setInput("What's your typical process?")}
                  className="bg-white border border-primary-200 hover:border-primary-600 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-primary-600 transition"
                >
                  What's your typical process?
                </button>
              </div>
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl rounded-tr-sm shadow-md"
                    : "bg-white text-gray-900 rounded-2xl rounded-tl-sm shadow border border-primary-100"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {msg.content}
                </p>
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white shadow border border-primary-100">
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t bg-white p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a question..."
            className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition disabled:opacity-50 text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
