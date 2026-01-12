import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { useAccount } from "@/contexts/AccountContext";
import { BadgeCheck, MailWarning } from "lucide-react";
import { useRequireVerificationEmail } from "@/hooks/useRequireVerificationEmail";
import { Spinner } from "./ui/spinner";

export function EmailValidationRequestCard() {
    const { accountInformation } = useAccount();
    const { requireVerification, loading } = useRequireVerificationEmail();
    
    const requestEmailValidation = async () => {
        await requireVerification();
    };

    return (
        <TabsContent className="w-full px-6 md:w-xl" value="validate-email">
            <Card>
                <CardHeader>
                    <CardTitle>Email Validation</CardTitle>
                    <CardDescription>
                        Manage your email verification status.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-3">
                    {accountInformation?.is_email_verified ? (
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                                <BadgeCheck className="h-10 w-10 text-green-600 dark:text-green-500" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold text-green-600 dark:text-green-500">Verified</h3>
                                <p className="text-muted-foreground">
                                    Your email address has been successfully validated.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="rounded-full bg-yellow-100 p-3 dark:bg-yellow-900/20">
                                <MailWarning className="h-10 w-10 text-yellow-600 dark:text-yellow-500" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-semibold">Not Verified</h3>
                                <p className="text-muted-foreground">
                                    Please validate your email to ensure account security.
                                </p>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    {!accountInformation?.is_email_verified && (
                            <Button onClick={requestEmailValidation} className="min-w-fit w-2/4 sm:w-auto" disabled={loading}>
                                {loading ? <Spinner /> : "Request Validation Email"}
                            </Button>
                    )}
                </CardFooter>
            </Card>
        </TabsContent>
    );
}