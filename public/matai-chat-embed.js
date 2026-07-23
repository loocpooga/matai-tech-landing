(function () {
  var MataiChat = {
    config: {
      position: "bottom-right",
      primaryColor: "#0E4A33",
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
      bubble.setAttribute("aria-label", "Open chat with Fin");
      bubble.setAttribute("role", "button");
      bubble.setAttribute("tabindex", "0");

      bubble.innerHTML = `
        <span id="matai-bubble-inner" class="matai-bubble-closed">
          <span class="matai-bubble-icon">
            <svg width="15" height="15" viewBox="0 0 100 100" fill="#F8FBF6">
              <path d="M8 20H26L42 40V66L26 46V94H8ZM92 20H74L58 40V66L74 46V94H92ZM50 4L58 25H55V94H45V25H42Z"/>
            </svg>
          </span>
          <span class="matai-bubble-label">Ask Fin</span>
        </span>
        <span id="matai-bubble-close" class="matai-bubble-x" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F8FBF6" stroke-width="2" stroke-linecap="round">
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
      iframe.setAttribute("title", "Fin, the Matai Tech assistant");

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
        ? "bottom: 20px; left: 20px;"
        : "bottom: 20px; right: 20px;";
      var containerPos = this.config.position === "bottom-left"
        ? "bottom: 76px; left: 20px;"
        : "bottom: 76px; right: 20px;";

      style.textContent = `
        @keyframes matai-slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
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

        #matai-bubble-inner {
          display: flex;
          align-items: center;
          gap: 8px;
          background: ${primaryColor};
          color: #F8FBF6;
          padding: 0 16px 0 13px;
          height: 44px;
          border-radius: 2px;
          border: 1px solid rgba(20, 32, 26, 0.4);
          transition: background 0.2s ease, transform 0.15s ease;
          user-select: none;
        }

        #matai-chat-bubble:hover #matai-bubble-inner,
        #matai-chat-bubble:focus-visible #matai-bubble-inner {
          background: #0A3A28;
        }

        #matai-chat-bubble:active #matai-bubble-inner {
          transform: translateY(1px);
        }

        #matai-chat-bubble:focus-visible #matai-bubble-inner {
          outline: 2px solid ${primaryColor};
          outline-offset: 2px;
        }

        .matai-bubble-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .matai-bubble-label {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Close state */
        #matai-bubble-close {
          display: none;
          align-items: center;
          justify-content: center;
          background: ${primaryColor};
          width: 44px;
          height: 44px;
          border-radius: 2px;
          border: 1px solid rgba(20, 32, 26, 0.4);
          transition: background 0.2s ease;
        }

        #matai-chat-bubble:hover #matai-bubble-close {
          background: #0A3A28;
        }

        #matai-chat-bubble.matai-open #matai-bubble-inner { display: none; }
        #matai-chat-bubble.matai-open #matai-bubble-close { display: flex; }

        /* ---- Chat container ---- */
        #matai-chat-container {
          position: fixed;
          ${containerPos}
          width: 400px;
          height: 600px;
          max-width: calc(100vw - 40px);
          max-height: calc(100vh - 96px);
          background: #F8FBF6;
          border-radius: 2px;
          border: 1.5px solid #14201A;
          overflow: hidden;
          z-index: 999998;
          display: none;
        }

        #matai-chat-container.open {
          display: block !important;
          animation: matai-slide-up 0.22s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
        bubble.setAttribute("aria-label", "Open chat with Fin");
        this.isOpen = false;
      } else {
        container.classList.add("open");
        bubble.classList.add("matai-open");
        bubble.setAttribute("aria-label", "Close chat");
        this.isOpen = true;
      }
    },

    closeChat: function () {
      var container = document.getElementById("matai-chat-container");
      var bubble = document.getElementById("matai-chat-bubble");

      container.classList.remove("open");
      container.style.display = "none";
      bubble.classList.remove("matai-open");
      bubble.setAttribute("aria-label", "Open chat with Fin");
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
      primaryColor: script.getAttribute("data-color") || "#0E4A33",
    });
  }
})();
