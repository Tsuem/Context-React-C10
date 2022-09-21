import './App.css';
//estos 3 elementos se utilizan para crear las rutas
//tenemos que hacer npm i react-router-dom para poder usarlos
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bisabuelo from './components/Bisabuelo/Bisabuelo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bisabuelo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
