import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Coins, ExternalLink } from "lucide-react";
import CardTitleInfo from "@/components/CardTitleInfo/CardTitleInfo";

const CreditsPage = () => {
  const handleBuyCredits = () => {
    const paymentLink = import.meta.env.VITE_STRIPE_PAYMENT_LINK;
    if (paymentLink) {
      window.open(paymentLink, "_blank");
    } else {
      console.error("Stripe payment link is not defined in environment variables.");
    }
  };

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md  animate-in fade-in-50 duration-500">
          <CardTitleInfo
            title="Credits"
            description="Manage your credits and subscription."
          />

          <Card className="border-border/40 shadow-sm backdrop-blur-xl bg-card/50">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Available Credits</CardTitle>
              <CardDescription>Your current balance</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <div className="text-6xl font-extrabold font-mono italic tracking-tighter text-blue-400">
                50
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleBuyCredits} 
                className="w-full h-11 text-base font-medium transition-all hover:scale-[1.02]"
                size="lg"
              >
                Buy More Credits
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CreditsPage;
