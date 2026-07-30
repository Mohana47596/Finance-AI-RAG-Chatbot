import { useState } from "react";

function UploadPanel({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.icon}>📎</button>
      <button style={styles.icon}>🖼</button>
      <button style={styles.icon}>🎤</button>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your finance question..."
        style={styles.input}
      />

      <button onClick={handleSend} style={styles.sendButton}>
        ➤
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#111827",
    gap: "10px",
  },
  icon: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#94a3b8",
  },
  input: {
    flex: 1,
    padding: "10px 15px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    backgroundColor: "#1e293b",
    color: "white",
  },
  sendButton: {
    padding: "10px 14px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
  },
};

export default UploadPanel;