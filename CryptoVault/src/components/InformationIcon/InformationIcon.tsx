import * as Tooltip from "@radix-ui/react-tooltip";
import { HiOutlineInformationCircle } from "react-icons/hi2";

type Props = {
  informationMessage: string;
};

export default function InformationIcon({ informationMessage }: Props) {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="relative inline-block cursor-pointer">
            <HiOutlineInformationCircle className="w-4 h-4" />
          </span>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            sideOffset={1}
            className="text-xs bg-white font-ligh rounded-md p-2 shadow-xl min-w-56 w-fit max-w-96 z-[9999] text-justify mx-1"
          >
            <p>{informationMessage}</p>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
