import { LoginPage } from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import { PARTIAL_PATHS } from "./paths";
import NotFoundPage from "@/pages/NotFoundPage";
import HomePage from "@/pages/HomePage";
import EmailValidatedPage from "@/pages/EmailValidatedPage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path={PARTIAL_PATHS.HOME} element={<HomePage />} />
      <Route path={PARTIAL_PATHS.LOGIN} element={<LoginPage />} />
      <Route path={PARTIAL_PATHS.REGISTER} element={<RegisterPage />} />
      <Route path={PARTIAL_PATHS.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      <Route
        path={PARTIAL_PATHS.RESET_PASSWORD()}
        element={<ResetPasswordPage />}
      />
      <Route path={PARTIAL_PATHS.EMAIL_VALIDATED} element={<EmailValidatedPage />} />
      <Route path={PARTIAL_PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}
