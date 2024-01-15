// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header/Header';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';
import Precios from "./components/Precios/Precios";
import { LanguageProvider } from './components/LanguageContext'; // Importar el proveedor de idioma

function App() {


  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Servicios />
        <Precios />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
