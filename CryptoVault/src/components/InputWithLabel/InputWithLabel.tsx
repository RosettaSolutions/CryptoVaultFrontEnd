import clsx from "clsx";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import type { ChangeEvent } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Description, Field, Input, Label } from "@headlessui/react";

type Props = {
  label: string;
  description: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputWithLabel = ({
  label,
  description,
  type,
  value,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="block text-sm/6 font-medium text-zinc-900 mt-3">
          {label}
        </Label>
        <Description className="text-sm/6 text-gray-500">
          {description}
        </Description>
        <div className="relative flex mt-1 items-center rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-500">
          <Input
            type={showPassword ? "text" : type}
            value={value}
            onChange={onChange}
            className={clsx(
              "block w-full ",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
            )}
          />

          {type === "password" && (
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <FaEyeSlash className="cursor-pointer" />
              ) : (
                <FaEye className="cursor-pointer" />
              )}
            </button>
          )}
        </div>
      </Field>
    </div>
  );
};

export default InputWithLabel;
