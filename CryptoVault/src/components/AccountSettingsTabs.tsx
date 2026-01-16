import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormChangeUsername } from "./FormChangeUsername";
import { FormChangeEmail } from "./FormChangeEmail";
import { FormSetRecoveryEmail } from "./FormSetRecoveryEmail";
import { EmailValidationRequestCard } from "./EmailValidationRequestCard";

export function AccountSettingsTabs() {
  return (
    <div className="w-full max-w-full">
      <Tabs defaultValue="username" className="w-full mt-4 flex flex-col items-center">
        <TabsList className="mb-3 grid w-fit h-auto grid-cols-2 md:w-fit md:inline-flex md:h-9">
          <TabsTrigger value="username">Username</TabsTrigger>
          <TabsTrigger value="email">E-mail</TabsTrigger>
          <TabsTrigger value="recovery-email">Recovery E-mail</TabsTrigger>
          <TabsTrigger value="validate-email">Validate E-mail</TabsTrigger>
        </TabsList>
          <FormChangeUsername />
          <FormChangeEmail />
          <FormSetRecoveryEmail />
          <EmailValidationRequestCard />  
      </Tabs>
    </div>
  );
}
