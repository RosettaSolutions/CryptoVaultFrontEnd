import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePasswordResetVerify } from "../hooks/usePasswordResetVerify";
import InputWithLabel from "../components/InputWithLabel/InputWithLabel";
import { usePasswordResetConfirm } from "../hooks/usePasswordResetConfirm";
import { COMPLETE_PATHS } from "../routes/paths";

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const { uid, token } = useParams();
  const { sendPasswordResetConfirm } = usePasswordResetConfirm();
  const { verifyPasswordResetToken } = usePasswordResetVerify();

  useEffect(() => {
    verifyPasswordResetToken(uid, token);
  }, [uid, token]);

  return (
    <main className="w-screen h-screen flex  items-center justify-center flex-col">
      <h1 className="text-sky-400 text-5xl font-mono font-semibold">
        <Link to={COMPLETE_PATHS.LOGIN}>CryptoVault</Link>
      </h1>
      <h6 className="text-2xl mt-6 mb-3 text-slate-700 font-light">
        Reset your password
      </h6>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await sendPasswordResetConfirm(newPassword, uid, token);
        }}
        className="w-full max-w-md flex items-center justify-center flex-col"
      >
        <InputWithLabel
          label="New Password"
          description="Insert your new password"
          type="text"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button type="submit" className="submit-btn">
          Reset password
        </Button>
      </form>
    </main>
  );
};

export default ResetPasswordPage;
