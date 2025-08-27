// src/components/ChatLauncher.jsx
import { useEffect, useState } from "react";

export default function ChatLauncher() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.Tawk_API) {
      setReady(true);
      return;
    }
    window.Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src='https://embed.tawk.to/68ae85f53b2d9e1926a1f7c6/1j3krmio0';
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s1.onload = () => setReady(true);
    document.body.appendChild(s1);
  }, []);

  const open = () => window.Tawk_API && window.Tawk_API.maximize();
  const hide = () => window.Tawk_API && window.Tawk_API.hideWidget();
  const show = () => window.Tawk_API && window.Tawk_API.showWidget();

  useEffect(() => {
    show();
    return () => hide();
  }, []);

  return (
    <button
      onClick={open}
      aria-label="Open chat"
      className="fixed hidden bottom-5 right-16 z-50 rounded-2xl px-4 py-3 shadow-lg bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition items-center gap-2"
    >
      {/* Chat Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H9.83l-4.12 3.29A1 1 0 0 1 4 19.72V17H5a3 3 0 0 1-3-3V5z" />
      </svg>
      <span className="font-medium">Chat with us</span>
      {!ready && <span className="ml-1 text-xs opacity-90">loading…</span>}
    </button>
  );
}
