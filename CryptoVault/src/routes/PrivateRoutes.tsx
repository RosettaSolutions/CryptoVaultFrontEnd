import FilesPage from "@/pages/FilesPage";
import AccountPage from "@/pages/AccountPage";
import AddFilePage from "@/pages/AddFilePage";
import ApiKeysPage from "@/pages/ApiKeysPage";
import FeedbackPage from "@/pages/FeedbackPage";
import { Routes, Route } from "react-router-dom";
import ValidationPage from "@/pages/ValidationPage";
import DecryptionPage from "@/pages/DecryptionPage";
import { AuthGuard } from "@/guards/AuthGuard";
import BlockchainDetailsPage from "@/pages/BlockchainDetailsPage";
import UnderConstructionPage from "@/pages/UnderConstructionPage";
import { AuthProvider } from "@/contexts/AuthContext";
import { PARTIAL_PATHS } from "./paths";
import NotFoundPage from "@/pages/NotFoundPage";
import CreditsPage from "@/pages/CreditsPage";

export default function PrivateRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path={PARTIAL_PATHS.FILES}
          element={
            <AuthGuard>
              <FilesPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.ADD_FILE}
          element={
            <AuthGuard>
              <AddFilePage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.BLOCKCHAIN}
          element={
            <AuthGuard>
              <BlockchainDetailsPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.VALIDATION}
          element={
            <AuthGuard>
              <ValidationPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.DECRYPTION}
          element={
            <AuthGuard>
              <DecryptionPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.API_KEYS}
          element={
            <AuthGuard>
              <ApiKeysPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.BILLING}
          element={
            <AuthGuard>
              <UnderConstructionPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.ACCOUNT}
          element={
            <AuthGuard>
              <AccountPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.FEEDBACK}
          element={
            <AuthGuard>
              <FeedbackPage />
            </AuthGuard>
          }
        />

        <Route
          path={PARTIAL_PATHS.CREDITS}
          element={<CreditsPage />}
        />

        <Route
          path={PARTIAL_PATHS.NOT_FOUND}
          element={<NotFoundPage />}
        />
      </Routes>
    </AuthProvider>
  );
}
