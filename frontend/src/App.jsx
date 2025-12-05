import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import LoginPage from "./pages/LoginPage"
import Register from "./pages/Register"

function App() {

  return (
    <>
      <ToastContainer  autoClose={3000} />

       <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
