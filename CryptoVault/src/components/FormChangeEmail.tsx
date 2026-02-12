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
import { useChangeEmail } from "@/hooks/useChangeEmail";
import { useAccount } from "@/contexts/AccountContext";
import { Spinner } from "./ui/spinner";

export function FormChangeEmail() {
    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");
    const { refetchAccountInformation } = useAccount();
    const { changeEmail, loading } = useChangeEmail();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await changeEmail(newEmail, password)
        setNewEmail("")
        setPassword("")
        refetchAccountInformation()
    }

    return (
        <TabsContent className="w-full px-6 md:w-xl" value="email">
            <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>E-Mail</CardTitle>
                <CardDescription>
                  Change your e-mail here.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="new-email">New E-mail</Label>
                  <Input id="new-email" type="email" autoComplete="new-email" placeholder="Type your new e-mail" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
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