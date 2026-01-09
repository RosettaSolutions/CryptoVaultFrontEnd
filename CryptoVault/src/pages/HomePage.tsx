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
    <div className="min-h-full w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-sky-400 font-mono">CryptoVault</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#security" className="text-slate-300 hover:text-white transition-colors">Security</a>
            <a href="#blockchain" className="text-slate-300 hover:text-white transition-colors">Blockchain</a>
            <a href="#docs" className="text-slate-300 hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 text-sm">
              <Lock className="w-3 h-3 mr-2 inline" />
              Zero-Knowledge Architecture
            </Badge>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Files.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Keys.
            </span>
            <br />
            Your Control.
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            End-to-end encrypted file storage with blockchain verification. 
            AES-GCM encryption meets Ethereum & Polygon for ultimate security and transparency.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              <Upload className="w-5 h-5 mr-2" />
              Upload Your First File
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8">
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">256-bit</div>
              <div className="text-sm text-slate-400">AES-GCM Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2 Chains</div>
              <div className="text-sm text-slate-400">Ethereum & Polygon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-slate-400">Client-Side Keys</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Security First Section */}
      <section id="security" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4">
                Security First
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Zero-Knowledge Architecture
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Your encryption keys never leave your device. We can't access your files, and neither can anyone else.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "AES-GCM Encryption",
                  description: "Military-grade 256-bit encryption protects every file you upload",
                  color: "text-blue-400"
                },
                {
                  icon: Key,
                  title: "Client-Side Keys",
                  description: "Encryption keys are generated and stored only on your device",
                  color: "text-cyan-400"
                },
                {
                  icon: Shield,
                  title: "Zero-Knowledge",
                  description: "We never see your keys or unencrypted data. Complete privacy guaranteed",
                  color: "text-emerald-400"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 h-full backdrop-blur-sm hover:border-slate-600 transition-colors">
                    <CardHeader>
                      <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                      <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400 text-base">
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
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 mb-4">
                Platform Features
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Everything You Need for Secure Storage
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
                  <Card className="bg-slate-800/30 border-slate-700 h-full backdrop-blur-sm hover:bg-slate-800/50 transition-colors group">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-10 h-10 text-blue-400 mb-3 group-hover:text-cyan-400 transition-colors" />
                      </motion.div>
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-400">
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
      <section id="blockchain" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 mb-4">
                <Zap className="w-3 h-3 mr-2 inline" />
                Blockchain Powered
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Verify on Ethereum & Polygon
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Store cryptographic proofs on-chain for ultimate transparency and tamper-proof verification
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 h-full backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-white text-2xl">On-Chain Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">
                      Every file can be validated against blockchain-stored cryptographic proofs
                    </p>
                    <ul className="space-y-3">
                      {[
                        "SHA-256 hash stored on-chain",
                        "Immutable proof of existence",
                        "Timestamp verification",
                        "Public audit capability"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 h-full backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                      <Wallet className="w-8 h-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-white text-2xl">Simple Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">
                      Pay-per-use blockchain validation with transparent credit system
                    </p>
                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                      <div className="text-4xl font-bold text-white mb-2">1 Credit</div>
                      <div className="text-slate-400 mb-4">= $1 USD per validation</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Ethereum validation</span>
                          <span className="text-white">1 credit</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Polygon validation</span>
                          <span className="text-white">1 credit</span>
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-grid-white/10" />
              <CardContent className="relative p-12 md:p-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Secure Your Files?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of users protecting their data with zero-knowledge encryption and blockchain verification
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
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
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-white">CryptoVault</span>
              </div>
              <p className="text-slate-400 text-sm">
                Zero-knowledge encrypted storage with blockchain verification
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 CryptoVault. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}