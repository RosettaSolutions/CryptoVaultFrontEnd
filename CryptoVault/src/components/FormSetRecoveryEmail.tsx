import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { useSetRecoveryEmail } from "@/hooks/useSetRecoveryEmail";
import { useAccount } from "@/contexts/AccountContext";
import { Spinner } from "./ui/spinner";

export function FormSetRecoveryEmail() {
    const [newRecoveryEmail, setNewRecoveryEmail] = useState("");
    const [password, setPassword] = useState("");
    const { refetchAccountInformation } = useAccount();
    const { setRecoveryEmail, loading } = useSetRecoveryEmail();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await setRecoveryEmail(newRecoveryEmail, password)
        setNewRecoveryEmail("")
        setPassword("")
        refetchAccountInformation()
    }

    return (
        <TabsContent className="w-full px-6 md:w-xl" value="recovery-email">
          <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                  <CardTitle>Recovery E-Mail</CardTitle>
                  <CardDescription>
                    Set or change your recovery e-mail here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="recovery-email">Recovery E-mail</Label>
                    <Input id="recovery-email" type="email" autoComplete="recovery-email" placeholder="Type your new recovery e-mail" value={newRecoveryEmail} onChange={(e) => setNewRecoveryEmail(e.target.value)}/>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" autoComplete="password" placeholder="Type your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={loading}>
                    {loading ? <Spinner /> : "Save changes"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
    );
}