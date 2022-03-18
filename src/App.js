import { Login, Signup } from "./pages/auth/auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Login />} />
      <Route element={<Signup />} />
    </Routes>
  );
}

export default App;
