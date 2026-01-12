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
import { useChangeUsername } from "@/hooks/useChangeUsername";
import { useAccount } from "@/contexts/AccountContext";
import { Spinner } from "./ui/spinner";

export function FormChangeUsername() {
    const [newUsername, setNewUsername] = useState("");
    const [password, setPassword] = useState("");
    const { refetchAccountInformation } = useAccount();
    const { changeUsername, loading } = useChangeUsername();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await changeUsername(newUsername, password)
        setNewUsername("")
        setPassword("")
        refetchAccountInformation()
    }

    return (
        <TabsContent className="w-full px-6 md:w-xl" value="username">
            <form onSubmit={handleSubmit} >
            <Card>
              <CardHeader>
                <CardTitle>Username</CardTitle>
                <CardDescription>
                  Change your username here.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="new-username">New Username</Label>
                  <Input id="new-username" placeholder="Type your new username" onChange={(e) => setNewUsername(e.target.value)} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)} />
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