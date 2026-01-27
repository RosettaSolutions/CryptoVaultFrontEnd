import "./App.css";
import PublicRoutes from "@/routes/PublicRoutes";
import PrivateRoutes from "@/routes/PrivateRoutes";
import { MessageProvider } from "./contexts/MessageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <BrowserRouter>
      <MessageProvider>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/app/*" element={<PrivateRoutes />} />
        </Routes>
      </MessageProvider>
    </BrowserRouter>
  );
}

export default App;
