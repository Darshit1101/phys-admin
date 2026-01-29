
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AuthLayout from "./components/layouts/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<h1>About Page</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
