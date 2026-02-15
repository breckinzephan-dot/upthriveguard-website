import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  XCircle,
  HelpCircle,
  ShieldAlert,
  Lock,
  Search,
  Monitor,
  Shield,
  Zap
} from "lucide-react";

import heroBg from "@/assets/hero-bg.png";
import trustBadge from "@/assets/trust-badge.png";
import securityBg from "@/assets/security-bg.png";

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

export default function Home() {
  const scrollToConsult = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-serif font-bold text-xl text-primary flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-accent" />
            The Upthrive Solution
          </div>
          <Button onClick={scrollToConsult} size="sm" className="hidden md:flex bg-green-600 hover:bg-green-700 text-white gap-2">
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-10" />
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span>Don't submit another wrong appeal.</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
              Amazon Account Suspended? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                Get Expert Reinstatement Help Fast
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We help Amazon sellers recover suspended and deactivated accounts with professional appeal strategies and structured reinstatement support.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={scrollToConsult} size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/20 transition-transform hover:-translate-y-1">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Free Account Review on WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4 flex items-center gap-1">
                <Clock className="h-4 w-4" /> Fast Response Guaranteed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Problems We Solve</h2>
            <p className="text-muted-foreground">Don't submit another generic appeal. We handle the most difficult cases.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: XCircle, title: "Account Deactivation", desc: "Full account access restoration strategies." },
              { icon: AlertTriangle, title: "Section 3 Violations", desc: "Code of Conduct & Drop Shipping appeals." },
              { icon: HelpCircle, title: "Inauthentic Complaints", desc: "Proving authenticity of your inventory." },
              { icon: ShieldCheck, title: "Related Accounts", desc: "Untangling linked account suspensions." },
              { icon: FileText, title: "Listing Suspension", desc: "Reinstating blocked ASINs and listings." },
              { icon: TrendingUp, title: "Appeal Rejected Cases", desc: "Fixing failed appeals from other agencies." },
              { icon: CheckCircle2, title: "Policy Violations", desc: "IP complaints, review manipulation, etc." },
              { icon: Clock, title: "Performance Issues", desc: "ODR, LSR, and VTR improvement plans." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-sm bg-white">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-50 text-blue-700">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-24 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <img 
            src={securityBg} 
            alt="Security Background" 
            className="absolute right-0 top-0 h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Lock className="h-4 w-4" />
                <span>New Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ecommerce Cybersecurity & <br/> Website Protection
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Ecommerce businesses and Amazon sellers are frequent targets for hacking, unauthorized access, malware, and account takeovers. Proactive security helps prevent business disruption and revenue loss.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Search, text: "Ecommerce website security audit" },
                  { icon: ShieldAlert, text: "Malware and vulnerability scanning" },
                  { icon: Zap, text: "Protection against hacking attempts" },
                  { icon: Lock, text: "Secure admin and access configuration" },
                  { icon: Monitor, text: "Shopify and platform security hardening" },
                  { icon: Shield, text: "Website monitoring and risk prevention" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 border border-white/10 text-blue-400">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="text-slate-200 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button onClick={scrollToConsult} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-lg shadow-xl shadow-blue-900/20">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Free Security Review on WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protection Positioning Block */}
      <section className="py-16 bg-white border-y relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-serif italic text-primary mb-4">“Recover. Secure. Protect.”</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              After helping sellers recover suspended accounts, we help ecommerce businesses secure their stores and systems to prevent future disruptions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">How Our Process Works</h2>
            <p className="text-muted-foreground">Simple, transparent, and focused on results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10" />
            
            {[
              { step: "01", title: "Free Account Review", desc: "Send us your suspension notice. We analyze the root cause for free." },
              { step: "02", title: "Appeal Strategy & Plan of Action", desc: "We craft a custom, professional Plan of Action (POA) tailored to your case." },
              { step: "03", title: "Submission Guidance & Follow-Up", desc: "We guide you through submission and handle any additional Amazon requests." },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-blue-900/20">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Why Choose Us?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                We don't use templates. Every appeal is written by an expert who understands Amazon's internal policies and language.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Experienced with Amazon suspension cases",
                  "Professional appeal writing",
                  "Clear communication",
                  "Fast response time",
                  "Seller-focused solutions",
                  "Security-first ecommerce approach",
                  "Confidential handling of business data",
                  "Focused on protecting online revenue and operations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button onClick={scrollToConsult} size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold border-none h-14 px-8 text-lg">
                  Speak to an Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <img 
                  src={trustBadge} 
                  alt="Trust Badge" 
                  className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-[pulse-slow_3s_ease-in-out_infinite]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Stop Losing Sales Due to Suspension</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Every day your account is down, you're losing money and ranking. Let us help you get back to selling.
          </p>
          <Button onClick={scrollToConsult} size="lg" className="w-full md:w-auto h-16 px-10 text-xl bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-900/10">
            <MessageCircle className="mr-3 h-6 w-6" />
            Chat on WhatsApp Now for Free Review
          </Button>
          <p className="text-xs text-muted-foreground mt-4">
            * We respect your privacy. Your information is kept strictly confidential.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border px-4">
            {[
              { q: "How long does reinstatement take?", a: "Timelines vary depending on the suspension type and Amazon's response times. Some cases are resolved in 24-48 hours, while complex ones may take weeks. We prioritize speed and accuracy." },
              { q: "What information do I need to start?", a: "We need your original suspension notice from Amazon and any subsequent communication. This helps us diagnose the root cause accurately." },
              { q: "Do you work with all marketplaces?", a: "Yes, we handle suspensions for Amazon US, UK, Canada, Australia, and most European marketplaces." },
              { q: "What if my appeal was already rejected?", a: "Rejected appeals are common. We analyze why it was rejected and draft a stronger, more detailed Plan of Action to address Amazon's specific concerns." },
              { q: "How do I know if my ecommerce website is vulnerable?", a: "Unless you have regular security audits and hardening in place, most sites have potential vulnerabilities. We perform a deep scan to identify risks like outdated plugins, insecure access points, and malware." },
              { q: "Do you work with Shopify and other ecommerce platforms?", a: "Absolutely. We provide specialized security hardening for Shopify, WooCommerce, Magento, and custom ecommerce platforms." },
              { q: "Can security issues lead to account suspension?", a: "Yes. If your linked website is compromised or used for phishing, it can trigger flags within Amazon's systems, leading to related account investigations and suspensions." },
              { q: "Do I need cybersecurity if my store is already running fine?", a: "Security is about prevention. Most cyberattacks happen silently until it's too late. Proactive protection ensures your revenue flow isn't interrupted by a sudden takeover or malware injection." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg py-6">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="font-serif font-bold text-2xl mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="h-6 w-6 text-accent" />
            The Upthrive Solution
          </div>
          <p className="text-blue-200 mb-8 max-w-md mx-auto">
            Professional Amazon reinstatement and ecommerce cybersecurity services for sellers worldwide.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <Button variant="link" className="text-white hover:text-accent" onClick={scrollToConsult}>Contact Support</Button>
            <Button variant="link" className="text-white hover:text-accent">Terms of Service</Button>
            <Button variant="link" className="text-white hover:text-accent">Privacy Policy</Button>
          </div>
          
          <div className="text-xs text-blue-300/60 max-w-2xl mx-auto leading-relaxed">
            Disclaimer: The Upthrive Solution is a third-party consulting agency and is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. Results depend on Amazon's final decision and cannot be guaranteed.
          </div>
          <div className="mt-8 text-sm text-blue-300/40">
            &copy; {new Date().getFullYear()} The Upthrive Solution. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToConsult}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1 rounded shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
        </span>
      </motion.button>
    </div>
  );
}
