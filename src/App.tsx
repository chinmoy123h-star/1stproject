import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./topbar";
import Princing from "./pricing";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar/>}/>
        <Route path="/features" element={<h1>Features Page</h1>} />
        <Route path="/pricing" element={<Princing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;