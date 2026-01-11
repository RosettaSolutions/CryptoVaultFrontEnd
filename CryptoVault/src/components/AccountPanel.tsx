import InformationCard from "./InformationCard/InformationCard";
import { LuHandCoins } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import UserInformationsCard from "./UserInformationsCard";
import { AccountSettingsTabs } from "./AccountSettingsTabs";
import { useAccount } from "@/contexts/AccountContext";
import { useEffect } from "react";

const AccountPanel = () => {
  const { accountInformation, refetchAccountInformation } = useAccount();

  useEffect(() => {
    refetchAccountInformation();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex mx-5 justify-between flex-wrap">
        <UserInformationsCard />
        <InformationCard
          title="Available credits"
          description="Credits available for file encryption."
          icon={LuHandCoins}
          value={accountInformation?.available_balance || 0}
        />
        <InformationCard
          title="Secure files"
          description="Number of files already encrypted."
          icon={LuShieldCheck}
          value={accountInformation?.protected_files_count || 0}
        />
      </div>
      <AccountSettingsTabs />
    </div>
  );
};

export default AccountPanel;
