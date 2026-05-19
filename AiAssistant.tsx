'use client';
import { useState } from 'react';

export default function AiAssistant() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      setResponse(data.response || data.error);
    } catch (err) {
      setResponse("Backend not reachable. Ensure python app.py is running.");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 bg-gray-900 border border-white/10 rounded-3xl shadow-xl ring-1 ring-blue-500/20">
      <h2 className="text-xl font-bold mb-4 text-white">RupeeWise AI Assistant</h2>
      <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me anything about your finances..."
        className="w-full p-4 mb-4 bg-gray-950 text-white rounded-xl border border-white/10 outline-none focus:border-blue-500 h-24"
      />
      <button 
        onClick={askAI}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-2xl font-bold transition-all"
      >
        {loading ? "Thinking..." : "Send to AI"}
      </button>
      {response && (
        <div className="mt-6 p-4 bg-gray-950 rounded-xl text-gray-300 border border-white/5 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}