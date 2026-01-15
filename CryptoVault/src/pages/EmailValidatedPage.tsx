import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { COMPLETE_PATHS } from "@/routes/paths";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { BadgeCheck, ArrowLeft, XCircle } from "lucide-react";
import { useVerifyEmail } from "@/hooks/useVerifyEmail";

export function EmailValidatedPage() {
  const { uid, token } = useParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const { fetchVerifyEmail, loading } = useVerifyEmail();

  useEffect(() => {
    if (!uid || !token) {
      setStatus('error');
      return;
    }

    const verify = async () => {
      const success = await fetchVerifyEmail(uid, token);
      setStatus(success ? 'success' : 'error');
    };

    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, token]);

  if (loading || status === 'loading') {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <Spinner className="h-12 w-12 text-sky-500 mx-auto" />
          <p className="text-gray-600 text-sm">Verifying your email...</p>
        </div>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center space-y-6 max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <XCircle className="h-16 w-16 sm:h-20 sm:w-20 text-red-600" />
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-600">
              Verification Failed
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The link you used to verify your email address is not valid or has expired.
            </p>
          </div>

          <Link to={COMPLETE_PATHS.LOGIN} className="inline-block pt-2">
            <Button size="default" className="font-medium gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Login
            </Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-6 max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <BadgeCheck className="h-16 w-16 sm:h-20 sm:w-20 text-green-600" />
        </motion.div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-600">
            Email Verified!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Your email address has been confirmed, helping us keep your account secure.
            <br />
            You can now safely access your <span className="font-mono text-sky-500 font-bold">CryptoVault</span> account.
          </p>
        </div>

        <Link to={COMPLETE_PATHS.FILES} className="inline-block pt-2">
          <Button size="default" className="font-medium gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to CryptoVault
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}

export default EmailValidatedPage;