/*
import { useState, useRef, useEffect } from "react";
import "./App.css";
import { FiSend, FiPaperclip, FiMic } from "react-icons/fi";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

 const sendMessage = async () => {
  if (!input.trim()) return;

  const question = input;

  const userMessage = { text: question, sender: "user" };
  setMessages(prev => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    const botMessage = {
      text: data.answer,
      sender: "bot",
    };

    setMessages(prev => [...prev, botMessage]);
  } catch (error) {
    setMessages(prev => [
      ...prev,
      { text: "⚠ Backend not running or CORS issue.", sender: "bot" }
    ]);
  }

  setLoading(false);
};
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="app-container">
      <div className="chat-wrapper">

        <div className="chat-header">
          <h1>Finance Intelligence Assistant</h1>
          <p>AI-powered financial analysis and insights</p>
        </div>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="message bot">
              Typing...
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        <div className="input-section">
          <div className="icon-group">
            <FiPaperclip className="icon" />
            <FiMic className="icon" />
          </div>

          <input
            type="text"
            placeholder="Ask your financial question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button className="send-btn" onClick={sendMessage}>
            <FiSend />
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
*/



import { useState, useRef, useEffect } from "react";
import "./App.css";
import { FiSend, FiPaperclip, FiMic } from "react-icons/fi";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // ===============================
  // SEND MESSAGE (CHAT)
  // ===============================
  const sendMessage = async () => {
    if (!input.trim()) return;

    const question = input;

    const userMessage = { text: question, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://rag-chatbot-2-n6lf.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      const botMessage = {
        text: data.answer,
        sender: "bot",
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { text: "⚠ Backend not running or CORS issue.", sender: "bot" }
      ]);
    }

    setLoading(false);
  };

  // ===============================
  // HANDLE PDF UPLOAD
  // ===============================
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setMessages(prev => [
      ...prev,
      { text: "📄 Uploading PDF...", sender: "bot" }
    ]);

    try {
      const response = await fetch("https://rag-chatbot-2-n6lf.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setMessages(prev => [
        ...prev,
        { text: "✅ " + data.message, sender: "bot" }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { text: "❌ PDF upload failed.", sender: "bot" }
      ]);
    }
  };

  // Auto Scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="app-container">
      <div className="chat-wrapper">

        <div className="chat-header">
          <h1>Finance Intelligence Assistant</h1>
          <p>AI-powered financial analysis and insights</p>
        </div>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="message bot">
              Typing...
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        <div className="input-section">
          <div className="icon-group">

            {/* PDF Upload */}
            <label className="icon">
              <FiPaperclip />
              <input
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </label>

            <FiMic className="icon" />
          </div>

          <input
            type="text"
            placeholder="Ask your financial question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button className="send-btn" onClick={sendMessage}>
            <FiSend />
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;