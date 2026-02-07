import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@headlessui/react";
import { COMPLETE_PATHS } from "../routes/paths";
import { Spinner } from "@/components/ui/spinner";
import { useRegisterUser } from "../hooks/useRegisterUser";
import { TermsOfUseDialog } from "../components/TermsOfUseDialog";
import InputWithLabel from "../components/InputWithLabel/InputWithLabel";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerNewUser, loading } = useRegisterUser();

  return (
    <main className="w-screen h-screen flex  items-center justify-center flex-col">
      <h1 className="text-sky-400 text-5xl font-mono font-semibold">
        <Link to={COMPLETE_PATHS.HOME}>CryptoVault</Link>
      </h1>
      <h6 className="text-2xl mt-6 mb-3 text-slate-700 font-light">
        Register your account
      </h6>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await registerNewUser(username, email, password);
        }}
        className="w-full max-w-md flex items-center justify-center flex-col"
      >
        <InputWithLabel
          label="Username"
          description="Insert your username here"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputWithLabel
          label="Email"
          description="Insert your valid email here"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWithLabel
          label="Password"
          description="Insert your password here"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="text-sm mt-6">
          Already have an account ?{" "}
          <Link
            to={COMPLETE_PATHS.LOGIN}
            className="text-sm font-mono font-semibold text-sky-400 underline"
          >
            Sign in
          </Link>
        </span>
        <span className="text-sm">
          By signing up, you agree to our{" "}
          <TermsOfUseDialog className="text-sm cursor-pointer font-mono font-semibold text-sky-400 underline underline-offset-auto p-0"  />
        </span>
        <Button type="submit" className="submit-btn" disabled={loading}>
          {loading ? <Spinner /> : "Sign up"}
        </Button>
      </form>
    </main>
  );
};

export default RegisterPage;
