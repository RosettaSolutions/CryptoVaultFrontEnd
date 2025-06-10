import "./App.css";
import LoginPage from "./pages/LoginPage";
import FilesPage from "./pages/FilesPage";
import RegisterPage from "./pages/RegisterPage";
import ComponentTestPage from "./pages/ComponentTestPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/files" element={<FilesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/component_test" element={<ComponentTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
