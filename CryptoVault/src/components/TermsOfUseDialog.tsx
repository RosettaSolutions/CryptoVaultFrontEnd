import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"

export function TermsOfUseDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-gray-50 cursor-pointer transition-transform duration-300 hover:scale-105 hover:underline">
          Terms of Use
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Terms of Use</DialogTitle>
          <DialogDescription>
            Last updated: January 2026. Please read these terms carefully.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] w-full rounded-md border p-4 text-sm leading-relaxed">
          <div className="flex flex-col gap-4">
            <p>
              <strong>1. Acceptance of Terms</strong>
              <br />
              By accessing and using CryptoVaultAPI (the "Service"), a private application for secure file storage and blockchain validation, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using the Service, you shall be subject to any posted guidelines or rules applicable to such features, including file encryption, credit purchases, and blockchain interactions. Any participation in this Service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this Service.
            </p>
            <p>
              <strong>2. Description of Services</strong>
              <br />
              The Service provides secure storage of user files using AES-GCM encryption and allows users to send validation keys to blockchain networks such as Ethereum and Polygon. These blockchain transactions require "Credits," which can be purchased within the Service at a cost of $1 USD per Credit. Credits are used solely for facilitating blockchain validations and are non-refundable. The Service is private and not open source; all rights to the underlying code and technology are reserved.
            </p>
            <p>
              <strong>3. Privacy Policy</strong>
              <br />
              It is our company policy that you strictly adhere to our Privacy Policy. Our Privacy Policy covers how we collect, use, and store your data, including encrypted files and blockchain-related information. We are committed to protecting your personal information and your right to privacy. Files are stored using AES-GCM encryption to ensure security, but you are responsible for maintaining the confidentiality of your encryption keys and account credentials.
            </p>
            <p>
              <strong>4. User Conduct</strong>
              <br />
              You agree to use the Service only for lawful purposes. You are prohibited from posting, uploading, or transmitting through this Service any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable material of any kind, including but not limited to any material that encourages conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national, or international law. Additionally, you agree not to misuse Credits, attempt to circumvent payment for blockchain validations, or use the Service for unauthorized blockchain activities.
            </p>
            <p>
              <strong>5. Intellectual Property</strong>
              <br />
              All content included in this Service, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, software, and encryption methodologies, is the property of the company or its content suppliers and protected by international copyright laws. The Service's blockchain integration features and Credit system are proprietary and may not be reproduced, modified, or distributed without explicit permission.
            </p>
            <p>
              <strong>6. Payments and Credits</strong>
              <br />
              Credits are required for sending validation keys to blockchain networks and are available for purchase at $1 USD per Credit via integrated payment processors. All purchases are final and non-refundable. You are responsible for any additional fees, such as blockchain gas fees, which may vary based on network conditions. We do not guarantee the success or timeliness of blockchain transactions, and you acknowledge the inherent risks of blockchain technology, including volatility, network congestion, and irreversibility of transactions.
            </p>
            <p>
              <strong>7. Data Security and Risks</strong>
              <br />
              We employ AES-GCM encryption to secure your stored files, but no system is entirely foolproof. You acknowledge that while we take reasonable measures to protect your data, we cannot guarantee absolute security against breaches, hacks, or unauthorized access. For blockchain validations, once a key is sent to networks like Ethereum or Polygon, it becomes publicly immutable, and you assume all risks associated with such disclosures.
            </p>
            <p>
              <strong>8. Termination</strong>
              <br />
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms, misuse Credits, or engage in prohibited conduct. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability. Upon termination, any unused Credits will be forfeited.
            </p>
            <p>
              <strong>9. Limitation of Liability</strong>
              <br />
              In no event shall the company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; (iv) unauthorized access, use or alteration of your transmissions or content; (v) failures or delays in blockchain transactions; (vi) loss of Credits or encrypted files; or (vii) fluctuations in cryptocurrency values or network fees, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
            <p>
              <strong>10. Changes to Terms</strong>
              <br />
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              <strong>11. Contact Us</strong>
              <br />
              If you have any questions about these Terms, please contact us.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
