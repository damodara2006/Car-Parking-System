import {io} from "socket.io-client"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Park from "./Pages/Park"
import Ticket from "./Pages/Ticket"
import Exit from "./Pages/Exit"
function App() {
  // let server = io("http://localhost:8080")

 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/park" element={<Park/>} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/exit" element={<Exit/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
