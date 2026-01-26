import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
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
import { useMessage } from "@/contexts/MessageContext";
import { useBuyCreditsCheckout } from "@/hooks/useGetBuyCreditsLink";
import { Spinner } from "@/components/ui/spinner"
import { useAccount } from "@/contexts/AccountContext";

const CreditsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { newMessage } = useMessage();
  const { fetchBuyCreditsLink, loading } = useBuyCreditsCheckout();
  const [ sessionId, setSessionId ] = useState<string | null>(null);
  const { accountInformation, refetchAccountInformation } = useAccount();

  const processingRef = useRef(false);

  const handlePurchaseSuccessfully = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
    newMessage({
      messageType: "success",
      message: "Purchase successful!",
      description: "Thank you for your purchase. You will receive your credits shortly.",
    });
  }; 

  const handlePurchaseFailed = () => {
    newMessage({
      messageType: "error",
      message: "Purchase failed!",
      description: "If you receive some problem, please contact our support.",
    });
  };

  const cleanQueryParams = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("session_id");
    newParams.delete("success");
    setSearchParams(newParams);
  };

  useEffect(() => {
    if (processingRef.current) return;

    if (searchParams.get("session_id")) {
      const success = searchParams.get("success");
      
      if (success === "true") {
        handlePurchaseSuccessfully();
        processingRef.current = true;
      } else if (success === "false") {
        handlePurchaseFailed();
        processingRef.current = true;
      }
      
      if (processingRef.current) {
        setSessionId(searchParams.get("session_id"));
        console.log(sessionId);
        cleanQueryParams();
      }
    }
  }, [searchParams, setSearchParams]);

  const handleBuyCredits = async () => {
    const data = await fetchBuyCreditsLink();
      if (data.checkout_url) {
        window.open(data.checkout_url, "_self");
      }
    };

  // Check the correct use
  useEffect(() => {
    refetchAccountInformation();
  }, []);

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
                { accountInformation?.available_balance || 0 }
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleBuyCredits} 
                className="w-full h-11 text-base font-medium transition-all hover:scale-[1.02]"
                size="lg"
              >
                {loading ? (
                      <Spinner />
                  ) : (
                      <span className="flex items-center gap-2">
                          Buy More Credits
                          <ExternalLink className="h-4 w-4" />
                      </span>
                  )}
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
