import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frieren from './pages/Frieren/Frieren';
import Tboi from './pages/tboi/tboi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/Frieren' element={<Frieren />}/>
        <Route path='/tboi' element={<Tboi />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
