import {io} from "socket.io-client"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Park from "./Pages/Park"
import Ticket from "./Pages/Ticket"
import Exit from "./Pages/Exit"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import First from "./Pages/First"
import Admin from "./Pages/Admin"
function App() {
  // let server = io("http://localhost:8080")

 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/first" element={<First/>} />
    <Route path="/admin" element={<Admin/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/park" element={<Park/>} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/exit" element={<Exit/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
