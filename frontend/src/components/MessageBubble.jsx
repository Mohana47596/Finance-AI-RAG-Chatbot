function MessageBubble({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          padding: "12px 18px",
          borderRadius: "20px",
          maxWidth: "70%",
          backgroundColor: isUser ? "#2563eb" : "#334155",
          color: "#ffffff",
          fontSize: "14px",
        }}
      >
        {message.text}
      </div>
    </div>
  );
}

export default MessageBubble;