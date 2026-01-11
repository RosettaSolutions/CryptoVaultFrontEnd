import { FaRegUser } from "react-icons/fa";
import { LuBookUser } from "react-icons/lu";
import { useAccount } from "@/contexts/AccountContext";
import { LuMail, LuCalendarDays, LuMailCheck } from "react-icons/lu";


const UserInformationsCard = () => {
  const { accountInformation } = useAccount();
  return (
    <div className="bg-white shadow-md rounded-lg p-3 m-1 w-full md:w-auto md:flex-[2] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold italic  text-gray-700">
          User Informations
        </h1>
        <LuBookUser />
      </div>

      <div>
        <div className="text-gray-500 flex items-center gap-1">
          <FaRegUser className="w-4 h-4" />
          <h2 className="font-light">{accountInformation?.username}</h2>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <LuMail className="w-4 h-4 " />
          <h3 className="font-light text-sm">{accountInformation?.email}</h3>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <LuMailCheck className="w-4 h-4 " />
          <h3 className="font-light text-sm">{accountInformation?.recovery_email || "Not set"}</h3>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <LuCalendarDays />
          <h3 className="font-light text-sm">
            CryptoVault member since{" "}
            {accountInformation?.created_at
              ? new Date(accountInformation.created_at).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )
              : "..."}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserInformationsCard;
