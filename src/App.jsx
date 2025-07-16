import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frieren from './pages/Frieren/Frieren';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/Frieren' element={<Frieren />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
