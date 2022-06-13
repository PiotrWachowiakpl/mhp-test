import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HOMEPAGE/HomePage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>

    </div>
    </BrowserRouter>
      
  );
}

export default App;
