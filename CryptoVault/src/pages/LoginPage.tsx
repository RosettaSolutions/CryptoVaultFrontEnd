import InputWithLabel from "../components/Input/InputWithLabel";
import { Button } from "@headlessui/react";

const LoginPage = () => {
  return (
    <main className="w-screen h-screen flex  items-center justify-center flex-col">
      <InputWithLabel
        label="Email"
        description="Insert your best email here"
        type="email"
      />
      {/* <Button buttonText="Teste"/> */}
      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 mt-6">
        Login
      </Button>
    </main>
  );
};

export default LoginPage;
