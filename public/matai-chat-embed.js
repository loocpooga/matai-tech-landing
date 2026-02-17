(function () {
  var MataiChat = {
    config: {
      position: "bottom-right",
      primaryColor: "#0A6E6E",
      baseUrl: "https://matai-ai-agent.vercel.app",
    },
    isOpen: false,

    init: function (options) {
      this.config = { ...this.config, ...options };
      this.createWidget();
      this.addStyles();
    },

    createWidget: function () {
      // --- Bubble button ---
      var bubble = document.createElement("div");
      bubble.id = "matai-chat-bubble";
      bubble.setAttribute("aria-label", "Open AI assistant");
      bubble.setAttribute("role", "button");
      bubble.setAttribute("tabindex", "0");

      bubble.innerHTML = `
        <span id="matai-bubble-inner" class="matai-bubble-closed">
          <span class="matai-bubble-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
            </svg>
          </span>
          <span class="matai-bubble-label">Ask AI</span>
          <span class="matai-bubble-dot"></span>
        </span>
        <span id="matai-bubble-close" class="matai-bubble-x" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
      `;

      // --- Chat container ---
      var container = document.createElement("div");
      container.id = "matai-chat-container";

      var iframe = document.createElement("iframe");
      iframe.id = "matai-chat-iframe";
      iframe.src = this.config.baseUrl + "/widget";
      iframe.allow = "clipboard-write";
      iframe.setAttribute("title", "Matai AI Assistant");

      container.appendChild(iframe);
      document.body.appendChild(bubble);
      document.body.appendChild(container);

      var self = this;
      bubble.addEventListener("click", function () { self.toggleChat(); });
      bubble.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); self.toggleChat(); }
      });
    },

    addStyles: function () {
      var style = document.createElement("style");
      var primaryColor = this.config.primaryColor;
      var pos = this.config.position === "bottom-left"
        ? "bottom: 24px; left: 24px;"
        : "bottom: 24px; right: 24px;";
      var containerPos = this.config.position === "bottom-left"
        ? "bottom: 96px; left: 24px;"
        : "bottom: 96px; right: 24px;";

      style.textContent = `
        @keyframes matai-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        @keyframes matai-slide-up {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        /* ---- Bubble ---- */
        #matai-chat-bubble {
          position: fixed;
          ${pos}
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999999;
          outline: none;
          border: none;
          background: none;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        /* Pill default state */
        #matai-bubble-inner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: ${primaryColor};
          color: white;
          padding: 0 18px 0 14px;
          height: 48px;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(10, 110, 110, 0.35);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          position: relative;
          overflow: hidden;
        }

        #matai-bubble-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0;
          border-radius: inherit;
          transition: opacity 0.2s ease;
        }

        #matai-chat-bubble:hover #matai-bubble-inner::before,
        #matai-chat-bubble:focus-visible #matai-bubble-inner::before {
          opacity: 0.08;
        }

        #matai-chat-bubble:hover #matai-bubble-inner {
          box-shadow: 0 6px 28px rgba(10, 110, 110, 0.45);
          transform: translateY(-1px);
        }

        #matai-chat-bubble:active #matai-bubble-inner {
          transform: translateY(0) scale(0.97);
        }

        .matai-bubble-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .matai-bubble-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: opacity 0.2s ease, width 0.25s ease;
          overflow: hidden;
        }

        .matai-bubble-dot {
          width: 7px;
          height: 7px;
          background: #4ade80;
          border-radius: 50%;
          flex-shrink: 0;
          animation: matai-dot-pulse 2.5s ease-in-out infinite;
          box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.25);
        }

        /* Close X — hidden by default */
        #matai-bubble-close {
          display: none;
          align-items: center;
          justify-content: center;
          background: ${primaryColor};
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(10, 110, 110, 0.35);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        #matai-bubble-close::before {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0;
          border-radius: inherit;
          transition: opacity 0.2s ease;
        }

        #matai-chat-bubble:hover #matai-bubble-close::before {
          opacity: 0.08;
        }

        #matai-chat-bubble:hover #matai-bubble-close {
          box-shadow: 0 6px 28px rgba(10, 110, 110, 0.45);
          transform: translateY(-1px);
        }

        #matai-chat-bubble.matai-open #matai-bubble-inner {
          display: none;
        }

        #matai-chat-bubble.matai-open #matai-bubble-close {
          display: flex;
        }

        /* ---- Chat container ---- */
        #matai-chat-container {
          position: fixed;
          ${containerPos}
          width: 400px;
          height: 600px;
          max-width: calc(100vw - 48px);
          max-height: calc(100vh - 112px);
          background: white;
          border-radius: 16px;
          box-shadow: 0 12px 48px rgba(15, 15, 15, 0.18), 0 2px 12px rgba(15, 15, 15, 0.1);
          overflow: hidden;
          z-index: 999998;
          display: none;
          border: 1px solid rgba(15, 15, 15, 0.06);
        }

        #matai-chat-container.open {
          display: block !important;
          animation: matai-slide-up 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        #matai-chat-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        @media (max-width: 480px) {
          #matai-chat-container {
            width: 100vw;
            height: 100svh;
            max-width: 100vw;
            max-height: 100svh;
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            top: 0 !important;
            border-radius: 0;
            border: none;
          }
        }
      `;

      document.head.appendChild(style);
    },

    toggleChat: function () {
      var container = document.getElementById("matai-chat-container");
      var bubble = document.getElementById("matai-chat-bubble");

      if (this.isOpen) {
        container.classList.remove("open");
        container.style.display = "none";
        bubble.classList.remove("matai-open");
        bubble.setAttribute("aria-label", "Open AI assistant");
        this.isOpen = false;
      } else {
        container.classList.add("open");
        bubble.classList.add("matai-open");
        bubble.setAttribute("aria-label", "Close AI assistant");
        this.isOpen = true;
      }
    },

    closeChat: function () {
      var container = document.getElementById("matai-chat-container");
      var bubble = document.getElementById("matai-chat-bubble");

      container.classList.remove("open");
      container.style.display = "none";
      bubble.classList.remove("matai-open");
      bubble.setAttribute("aria-label", "Open AI assistant");
      this.isOpen = false;
    },
  };

  window.MataiChat = MataiChat;

  window.addEventListener("message", function (event) {
    if (event.data && event.data.type === "CLOSE_CHAT") {
      MataiChat.closeChat();
    }
  });

  var script = document.currentScript;
  if (script && script.hasAttribute("data-auto-init")) {
    MataiChat.init({
      position: script.getAttribute("data-position") || "bottom-right",
      primaryColor: script.getAttribute("data-color") || "#0A6E6E",
    });
  }
})();
