import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // Importar la función v4 de la biblioteca uuid
import "./Servicios/Chat.css";

const ChatApp = () => {
  const chatboxRef = useRef(null);
  const messageInputRef = useRef(null);
  const [receiving, setReceiving] = useState(false);
  const chatId = useRef(uuidv4()); // Generar un identificador único usando uuidv4

  const systemPrompt =
    "You are a persuasive web development services bot that provides advice on web development services and tries to convince the user why they should purchase your web development services.";

  const createMessageElement = (text, alignment) => {
    const messageElement = document.createElement("div");

    messageElement.className = `message ${alignment}`;
    messageElement.textContent = text;

    return messageElement;
  };

  const connectWebSocket = (message) => {
    setReceiving(true);
    const url = "wss://backend.buildpicoapps.com/api/chatbot/chat";
    const websocket = new WebSocket(url);

    websocket.addEventListener("open", () => {
      websocket.send(
        JSON.stringify({
          chatId: chatId.current,
          appId: "order-owner",
          systemPrompt: systemPrompt,
          message: message,
        })
      );
    });

    const messageElement = createMessageElement("", "left");
    chatboxRef.current.appendChild(messageElement);

    websocket.onmessage = (event) => {
      messageElement.innerText += event.data;
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    };

    websocket.onclose = (event) => {
      if (event.code === 1000) {
        setReceiving(false);
      } else {
        messageElement.textContent +=
          "Error getting response from server. Refresh the page and try again.";
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        setReceiving(false);
      }
    };
  };

  const handleSendButtonClick = () => {
    if (!receiving && messageInputRef.current.value.trim() !== "") {
      const messageText = messageInputRef.current.value.trim();
      messageInputRef.current.value = "";
      const messageElement = createMessageElement(messageText, "right");
      chatboxRef.current.appendChild(messageElement);
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

      connectWebSocket(messageText);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !receiving && messageInputRef.current.value.trim() !== "") {
      event.preventDefault();
      handleSendButtonClick();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat">
        <div ref={chatboxRef} className="chatbox"></div>
        <div className="message-input">
          <input
            ref={messageInputRef}
            className="message-input-field"
            type="text"
            placeholder="Escribe aquí tu mensaje"
            onKeyDown={handleKeyDown}
          />
          <button
            className="send-button"
            onClick={handleSendButtonClick}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
