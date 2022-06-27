import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SignIn } from "./pages/SignIn";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/chat" element={<Home />} />
    </Routes>
  )
}