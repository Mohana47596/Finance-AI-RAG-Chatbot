import { useState } from "react";
import MessageBubble from "./MessageBubble";
import UploadPanel from "./UploadPanel";

function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to Finance AI Assistant 🌙" },
  ]);

  const handleSend = (text) => {
    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: "Backend response will appear here.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Finance AI</div>

      <div style={styles.chatArea}>
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>

      <UploadPanel onSend={handleSend} />
    </div>
  );
}

const styles = {
  container: {
    width: "800px",
    height: "85vh",
    backgroundColor: "#1e293b",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
    overflow: "hidden",
  },
  header: {
    padding: "20px",
    backgroundColor: "#111827",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  chatArea: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    backgroundColor: "#1e293b",
  },
};

export default ChatWindow;