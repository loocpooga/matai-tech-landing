"use client";

import { useEffect } from "react";

export default function MataiChatWidget() {
  useEffect(() => {
    // Load the chat widget script from local public folder
    const script = document.createElement("script");
    script.src = "/matai-chat-embed.js";
    script.setAttribute("data-auto-init", "");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
