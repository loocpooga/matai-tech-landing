"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatOverlay from "./ChatOverlay";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatButton onClick={toggleChat} />
      <ChatOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
