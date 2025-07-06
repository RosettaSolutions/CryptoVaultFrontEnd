import "./App.css";
import LoginPage from "./pages/LoginPage";
import FilesPage from "./pages/FilesPage";
import AddFilePage from "./pages/AddFilePage";
import RegisterPage from "./pages/RegisterPage";
import ComponentTestPage from "./pages/ComponentTestPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { MessageProvider } from "./contexts/MessageContext";
import Message from "./components/Message/Message";
import BlockchainDetailsPage from "./pages/BlockchainDetailsPage";
import ValidationPage from "./pages/ValidationPage";

function App() {
  return (
    <BrowserRouter>
      <MessageProvider>
        <AuthProvider>
          <Message />
          <Routes>
            <Route path="/files" element={<FilesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/component_test" element={<ComponentTestPage />} />
            <Route path="/add_file" element={<AddFilePage />} />
            <Route path="/blockchain" element={<BlockchainDetailsPage />} />
            <Route path="/validation" element={<ValidationPage />} />
          </Routes>
        </AuthProvider>
      </MessageProvider>
    </BrowserRouter>
  );
}

export default App;
