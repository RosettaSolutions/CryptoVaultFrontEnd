import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { useLogin } from "@/hooks/useLogin";
import { COMPLETE_PATHS } from "@/routes/paths";
import InputWithLabel from "../components/InputWithLabel/InputWithLabel";


export const LoginPage = () => {
  const { doLogin } = useLogin(); // loadingLogin is not used
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="w-screen h-screen flex  items-center justify-center flex-col">
      <h1 className="text-sky-400 text-5xl font-mono font-semibold">
        <Link to={COMPLETE_PATHS.HOME}>CryptoVault</Link>
      </h1>
      <h6 className="text-2xl mt-6 mb-3 text-slate-700 font-light">
        Login to your account
      </h6>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await doLogin(username, password);
        }}
        className="w-full max-w-md flex items-center justify-center flex-col"
      >
        <InputWithLabel
          label="Username"
          description="Insert your username here"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <InputWithLabel
          label="Password"
          description="Insert password here"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <div className="flex flex-col w-full px-4 align-middle items-center">
          <span className="text-sm mt-6">
            Need an account ?{" "}
            <Link
              to={COMPLETE_PATHS.REGISTER}
              className="text-sm font-mono font-semibold text-sky-400 underline"
            >
              Sign up
            </Link>
          </span>
          <span className="text-sm mt-2">
            Forgot your password ?{" "}
            <Link
              to={COMPLETE_PATHS.FORGOT_PASSWORD}
              className="text-sm font-mono font-semibold text-sky-400 underline"
            >
              Reset password
            </Link>
          </span>
        </div>
        <Button type="submit" className="submit-btn">
          Sign in
        </Button>
      </form>
    </main>
  );
};
