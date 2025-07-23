import clsx from "clsx";
import type { ChangeEvent } from "react";
import { Description, Field, Input, Label } from "@headlessui/react";

type Props = {
  label: string;
  description: string;
  type: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputWithLabel = ({ label, description, type, value, onChange }: Props) => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="block text-sm/6 font-medium text-zinc-900 mt-3">
          {label}
        </Label>
        <Description className="text-sm/6 text-gray-500">
          {description}
        </Description>
        <Input
          type={type}
          value={value}
          onChange={onChange}
          className={clsx(
            "mt-1 block w-full rounded-lg border-none bg-white px-3 py-1.5 text-sm/6 text-gray-500",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
          )}
        />
      </Field>
    </div>
  );
};

export default InputWithLabel;

// <div className="flex align-middle justify-center items-center border-2 border-sky-400 rounded-md px-4 py-2 m-2">
//   <input className="all-[unset]" placeholder={placeholder} type={type} />
//   <MdEmail className="text-gray-400" />
// </div>
