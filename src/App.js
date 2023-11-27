import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header/Header';
import Servicios from './components/Servicios/Servicios';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Servicios />
      <Footer />
    </div>
  );
}

export default App;
