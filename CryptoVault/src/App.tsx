import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ComponentTestPage from "./pages/ComponentTestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/component_test" element={<ComponentTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
