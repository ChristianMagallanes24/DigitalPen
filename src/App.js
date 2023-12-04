// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header/Header';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import FloatingChatButton from './components/FloatingChatButton/FloatingChatButton';
import ChatApp from './components/ChatApp';
import Precios from "./components/Precios/Precios";
import { LanguageProvider } from './components/LanguageContext'; // Importar el proveedor de idioma

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Servicios />
        <Precios />
        <Footer />
        <FloatingChatButton isChatOpen={isChatOpen} onToggleChat={handleToggleChat} />
        {isChatOpen && <ChatApp onClose={handleToggleChat} />}
      </div>
    </LanguageProvider>
  );
}

export default App;
