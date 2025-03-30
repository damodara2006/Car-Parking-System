import {io} from "socket.io-client"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Park from "./Pages/Park"
function App() {
  // let server = io("http://localhost:8080")

 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/park" element={<Park/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
