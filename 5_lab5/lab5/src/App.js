import logo from './logo.svg';
import './App.css';
import { Routes, Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Component/Home';
import Model3 from './Component/Model3';
import ModelS from './Component/ModelS';
import ModelX from './Component/ModelX';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Model3" element={<Model3 />}></Route>
          <Route path="/ModelS" element={<ModelS />}></Route>
          <Route path="/ModelX" element={<ModelX />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;