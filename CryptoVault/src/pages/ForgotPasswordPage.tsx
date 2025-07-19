import InputWithLabel from "../components/InputWithLabel/InputWithLabel";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { usePasswordResetRequest } from "../hooks/usePasswordResetRequest";

const ForgotPasswordPage = () => {
  const [usernameOrPassword, setUsernameOrPassword] = useState("");
  const { sendPasswordResetRequest } = usePasswordResetRequest();

  return (
    <main className="w-screen h-screen flex  items-center justify-center flex-col">
      <h1 className="text-sky-400 text-5xl font-mono font-semibold">
        <Link to="/login">CryptoVault</Link>
      </h1>
      <h6 className="text-2xl mt-6 mb-3 text-slate-700 font-light">
        Request a password reset email
      </h6>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await sendPasswordResetRequest(usernameOrPassword);
          setUsernameOrPassword("");
        }}
        className="w-full max-w-md flex items-center justify-center flex-col"
      >
        <InputWithLabel
          label="Username or Email"
          description="Insert your username or email here"
          type="text"
          value={usernameOrPassword}
          onChange={(e) => setUsernameOrPassword(e.target.value)}
        />
        <span className="text-sm mt-6">
          Remember your password ?{" "}
          <Link
            to="/Login"
            className="text-sm font-mono font-semibold text-sky-400 underline"
          >
            Sign in
          </Link>
        </span>
        <Button type="submit" className="submit-btn">
          Send reset link
        </Button>
      </form>
    </main>
  );
};

export default ForgotPasswordPage;
