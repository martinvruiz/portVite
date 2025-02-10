import "./index.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="bg-black min-h-full text-white font-oswald">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
