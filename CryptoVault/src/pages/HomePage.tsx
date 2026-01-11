import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Key, 
  Database, 
  Zap, 
  Code, 
  CheckCircle2,
  FileText,
  Wallet,
  ArrowRight,
  Github,
  BookOpen,
  Upload,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CryptoVaultHomePage() {
  return (
    <div className="min-h-full w-full bg-[#FAFAFA]">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900 font-mono">CryptoVault</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
            <a href="#security" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Security</a>
            <a href="#blockchain" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Blockchain</a>
            <a href="#docs" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Docs</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium shadow-sm">
              <Lock className="w-3 h-3 mr-2 inline" />
              Zero-Knowledge Architecture
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            Your Files.
            <br />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent inline-block"
            >
              Your Keys.
            </motion.span>
            <br />
            Your Control.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            End-to-end encrypted file storage with blockchain verification. 
            AES-GCM encryption meets Ethereum & Polygon for ultimate security and transparency.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 shadow-xl shadow-blue-600/20 transition-transform hover:-translate-y-1">
              <Upload className="w-5 h-5 mr-2" />
              Upload Your First File
            </Button>
            <Button size="lg" variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 text-lg px-8 shadow-sm hover:border-gray-300">
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">256-bit</div>
              <div className="text-sm text-gray-500 font-medium">AES-GCM Encryption</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">2 Chains</div>
              <div className="text-sm text-gray-500 font-medium">Ethereum & Polygon</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-500 font-medium">Client-Side Keys</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Security First Section */}
      <section id="security" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 mb-4 px-4 py-1">
                Security First
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Zero-Knowledge Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your encryption keys never leave your device. We can't access your files, and neither can anyone else.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "AES-GCM Encryption",
                  description: "Military-grade 256-bit encryption protects every file you upload",
                  color: "text-blue-600",
                  bg: "bg-blue-50"
                },
                {
                  icon: Key,
                  title: "Client-Side Keys",
                  description: "Encryption keys are generated and stored only on your device",
                  color: "text-cyan-600",
                  bg: "bg-cyan-50"
                },
                {
                  icon: Shield,
                  title: "Zero-Knowledge",
                  description: "We never see your keys or unencrypted data. Complete privacy guaranteed",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white border-gray-100 h-full hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4`}>
                        <feature.icon className={`w-7 h-7 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-gray-900 text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-500 text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 mb-4 px-4 py-1">
                Platform Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Everything You Need for Secure Storage
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Upload, encrypt, verify, and manage your files with enterprise-grade security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Upload,
                  title: "Unlimited Uploads",
                  description: "Upload files of any size with automatic encryption"
                },
                {
                  icon: Database,
                  title: "Encrypted Storage",
                  description: "All files encrypted with AES-GCM before storage"
                },
                {
                  icon: Search,
                  title: "File Validation",
                  description: "Verify file integrity with blockchain proofs"
                },
                {
                  icon: Key,
                  title: "Local Decryption",
                  description: "Decrypt files locally using your private keys"
                },
                {
                  icon: Code,
                  title: "API Access",
                  description: "Generate API keys for programmatic access"
                },
                {
                  icon: FileText,
                  title: "Documentation",
                  description: "Comprehensive API docs and integration guides"
                },
                {
                  icon: Wallet,
                  title: "Credit System",
                  description: "Simple pay-per-use blockchain verification"
                },
                {
                  icon: CheckCircle2,
                  title: "Audit Trail",
                  description: "View all blockchain transactions and proofs"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white border-gray-200 h-full hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors"
                      >
                        <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                      </motion.div>
                      <CardTitle className="text-gray-900 text-lg font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-500">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Integration */}
      <section id="blockchain" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-orange-50 text-orange-700 border-orange-200 mb-4 px-4 py-1">
                <Zap className="w-3 h-3 mr-2 inline" />
                Blockchain Powered
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                Verify on Ethereum & Polygon
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Store cryptographic proofs on-chain for ultimate transparency and tamper-proof verification
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 h-full shadow-lg shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-gray-900 text-2xl font-bold">On-Chain Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Every file can be validated against blockchain-stored cryptographic proofs
                    </p>
                    <ul className="space-y-3">
                      {[
                        "SHA-256 hash stored on-chain",
                        "Immutable proof of existence",
                        "Timestamp verification",
                        "Public audit capability"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 h-full shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Wallet className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-gray-900 text-2xl font-bold">Simple Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      Pay-per-use blockchain validation with transparent credit system
                    </p>
                    <div className="bg-white/60 rounded-xl p-6 border border-purple-100 shadow-sm">
                      <div className="text-4xl font-bold text-gray-900 mb-2">1 Credit</div>
                      <div className="text-gray-500 mb-4 font-medium">= $1 USD per validation</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Ethereum validation</span>
                          <span className="text-gray-900 font-bold">1 credit</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Polygon validation</span>
                          <span className="text-gray-900 font-bold">1 credit</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-500 border-0 overflow-hidden relative shadow-2xl shadow-blue-500/20">
              <div className="absolute inset-0 bg-grid-white/10" />
              <CardContent className="relative p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Ready to Secure Your Files?
                </h2>
                <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto font-medium">
                  Join thousands of users protecting their data with zero-knowledge encryption and blockchain verification
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 backdrop-blur-sm transform transition-all duration-200 hover:scale-105 hover:text-white"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900 font-mono">CryptoVault</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Zero-knowledge encrypted storage with blockchain verification
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 CryptoVault. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}