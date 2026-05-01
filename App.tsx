import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./topbar";
import Pricing from './pricing';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar/>}/>
        <Route path="/features" element={<h1>Features Page</h1>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;