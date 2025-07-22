import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  children: JSX.Element;
}

export function ProtectedRoute({ children }: Props) {
  const { accessToken, refreshToken, loading } = useAuth();

  if (loading) {
    return (
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center">
        <PropagateLoader color="#364153" />
      </main>
    );
  }
  if (!accessToken && !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
