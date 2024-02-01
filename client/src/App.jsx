import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Header from "./Components/Header"
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/sign-in" element={<SignIn></SignIn>}/>
      <Route path="/sign-up" element={<SignUp></SignUp>}/>
      <Route path="/projects" element={<Projects></Projects>}/>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}/>
     
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
