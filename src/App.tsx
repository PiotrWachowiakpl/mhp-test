import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from './Components/NAVBAR/MyNavbar'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<MyNavbar />} />
    </Routes>

    </div>
    </BrowserRouter>
      
  );
}

export default App;
