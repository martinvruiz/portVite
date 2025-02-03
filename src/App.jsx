import "./index.css"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="bg-black h-full text-white">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
