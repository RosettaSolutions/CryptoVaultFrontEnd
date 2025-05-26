import InputWithLabel from "../components/InputWithLabel/InputWithLabel";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="w-screen h-screen flex  items-center justify-center flex-col">
      <h1 className="text-sky-400 text-5xl font-mono font-semibold">
        <Link to="/">CryptoVault</Link>
      </h1>
      <h6 className="text-2xl mt-6 mb-3 text-slate-700 font-light">
        Login to your account
      </h6>

      <InputWithLabel
        label="Username"
        description="Insert your username here"
        type="text"
      />
      <InputWithLabel
        label="Password"
        description="Insert password here"
        type="password"
      />

      <span className="text-sm mt-6">
        Need an account ?{" "}
        <Link
          to="/register"
          className="text-sm font-mono font-semibold text-sky-400 underline"
        >
          Sign up
        </Link>
      </span>

      <Button type="submit" className="submit-btn">
        Sign in
      </Button>
    </main>
  );
};

export default LoginPage;
