import "./App.css";
import LoginPage from "./pages/LoginPage";
import FilesPage from "./pages/FilesPage";
import AddFilePage from "./pages/AddFilePage";
import RegisterPage from "./pages/RegisterPage";
import Message from "./components/Message/Message";
import ValidationPage from "./pages/ValidationPage";
import DecryptionPage from "./pages/DecryptionPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./guards/protectedRoute";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { MessageProvider } from "./contexts/MessageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlockchainDetailsPage from "./pages/BlockchainDetailsPage";
import ApiKeysPage from "./pages/ApiKeysPage";

function App() {
  return (
    <BrowserRouter>
      <MessageProvider>
        <AuthProvider>
          <Message />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="/reset-password/:uid/:token"
              element={<ResetPasswordPage />}
            />

            <Route
              path="/files"
              element={
                <ProtectedRoute>
                  <FilesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add_file"
              element={
                <ProtectedRoute>
                  <AddFilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blockchain"
              element={
                <ProtectedRoute>
                  <BlockchainDetailsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/validation"
              element={
                <ProtectedRoute>
                  <ValidationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/decryption"
              element={
                <ProtectedRoute>
                  <DecryptionPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/api_keys"
              element={
                <ProtectedRoute>
                  <ApiKeysPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </MessageProvider>
    </BrowserRouter>
  );
}

export default App;
