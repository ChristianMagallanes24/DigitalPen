import React from "react";
import pro from '../../assets/robot-de-chat.gif';
import "./Flot.css";

const FloatingChatButton = ({ isChatOpen, onToggleChat }) => {
  return (
    <div className="floating-chat-button">
      <button className="btn-chat" onClick={onToggleChat}>
        {isChatOpen ? <img className="btn-ico" src={pro} alt="Protección" /> : <img className="btn-icon" src={pro} alt="Protección" />}
      </button>
    </div>
  );
};

export default FloatingChatButton;
