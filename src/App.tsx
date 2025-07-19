import Home from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
