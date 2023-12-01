// App.jsx
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header/Header';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import FloatingChatButton from './components/FloatingChatButton/FloatingChatButton'; // Asegúrate de importar el componente
import ChatApp from './components/ChatApp';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <Header />
      <Servicios />
      <Footer />

      {/* Botón flotante para abrir y cerrar el chat */}
      <FloatingChatButton isChatOpen={isChatOpen} onToggleChat={handleToggleChat} />
      
      {/* Renderizar el ChatApp si está abierto */}
      {isChatOpen && <ChatApp onClose={handleToggleChat} />}
    </div>
  );
}

export default App;
