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
  Zap,
  Quote
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import heroBg from "@/assets/hero-bg.png";
import trustBadge from "@/assets/trust-badge.png";
import securityBg from "@/assets/security-bg.png";

import { useLocation } from "wouter";

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
  const [, setLocation] = useLocation();
  const whatsappNumber = "+447482463166";
  const defaultMessage = encodeURIComponent("Hello, I am looking for a solution for my Amazon account suspension or ecommerce security issue. Can you help me?");
  
  const scrollToConsult = () => {
    window.open(`https://wa.me/${whatsappNumber.replace("+", "")}?text=${defaultMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-serif font-bold text-lg sm:text-xl text-primary flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0" />
            <span className="truncate">The Upthrive Solution</span>
          </div>
          <Button onClick={scrollToConsult} size="sm" className="bg-green-600 hover:bg-green-700 text-white gap-2 text-xs sm:text-sm px-3 sm:px-4">
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">WhatsApp Us</span>
            <span className="xs:hidden">Chat</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-32 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-10" />
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs sm:text-sm font-medium mb-6">
              <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Don't submit another wrong appeal.</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight text-balance">
              Amazon Account Suspended? <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">
                Get Expert Reinstatement Help Fast
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              We help Amazon sellers recover suspended and deactivated accounts with professional appeal strategies and structured reinstatement support.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2">
              <Button onClick={scrollToConsult} size="lg" className="w-full sm:w-auto text-base sm:text-lg h-14 px-6 sm:px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/20 transition-transform hover:-translate-y-1">
                <MessageCircle className="mr-2 h-5 w-5 shrink-0" />
                <span className="truncate">Recover My Account Now</span>
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mt-2 sm:mt-0">
                <Clock className="h-4 w-4 shrink-0" /> Fast Response Guaranteed
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary leading-snug">Problems We Solve</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4">Don't submit another generic appeal. We handle the most difficult cases.</p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { id: "account-deactivation", icon: XCircle, title: "Account Deactivation", desc: "Full account access restoration strategies." },
              { id: "section-3-violations", icon: AlertTriangle, title: "Section 3 Violations", desc: "Code of Conduct & Drop Shipping appeals." },
              { id: "inauthentic-complaints", icon: HelpCircle, title: "Inauthentic Complaints", desc: "Proving authenticity of your inventory." },
              { id: "related-accounts", icon: ShieldCheck, title: "Related Accounts", desc: "Untangling linked account suspensions." },
              { id: "listing-suspension", icon: FileText, title: "Listing Suspension", desc: "Reinstating blocked ASINs and listings." },
              { id: "appeal-rejected", icon: TrendingUp, title: "Appeal Rejected Cases", desc: "Fixing failed appeals from other agencies." },
              { id: "policy-violations", icon: CheckCircle2, title: "Policy Violations", desc: "IP complaints, review manipulation, etc." },
              { id: "performance-issues", icon: Clock, title: "Performance Issues", desc: "ODR, LSR, and VTR improvement plans." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className="h-full hover:shadow-lg transition-all border-none shadow-sm bg-white cursor-pointer group"
                  onClick={() => setLocation(`/solution/${item.id}`)}
                >
                  <CardContent className="p-5 sm:p-6 flex flex-col items-start gap-4 h-full">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-blue-50 text-blue-700 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg mb-2 text-primary leading-tight">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                      <div className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <img 
            src={securityBg} 
            alt="Security Background" 
            className="absolute right-0 top-0 h-full w-full object-cover opacity-30"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ecommerce Cybersecurity & <br className="hidden md:block"/> Website Protection
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Ecommerce businesses and Amazon sellers are frequent targets for hacking, unauthorized access, malware, and account takeovers. Proactive security helps prevent business disruption and revenue loss.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                {[
                  { icon: Search, text: "Ecommerce website security audit" },
                  { icon: ShieldAlert, text: "Malware and vulnerability scanning" },
                  { icon: Zap, text: "Protection against hacking attempts" },
                  { icon: Lock, text: "Secure admin and access configuration" },
                  { icon: Monitor, text: "Shopify and platform security hardening" },
                  { icon: Shield, text: "Website monitoring and risk prevention" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded bg-white/5 border border-white/10 text-blue-400 shrink-0">
                      <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                    <span className="text-slate-200 text-xs sm:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="px-1">
                <Button onClick={scrollToConsult} size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white h-14 px-6 sm:px-8 text-base sm:text-lg shadow-xl shadow-blue-900/20">
                  <MessageCircle className="mr-2 h-5 w-5 shrink-0" />
                  <span className="truncate">Secure My Business Now</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protection Positioning Block */}
      <section className="py-12 md:py-20 bg-white border-y relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-primary mb-4">“Recover. Secure. Protect.”</h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4">
              After helping sellers recover suspended accounts, we help ecommerce businesses secure their stores and systems to prevent future disruptions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">How Our Process Works</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Simple, transparent, and focused on results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10" />
            
            {[
              { step: "01", title: "Free Account Review", desc: "Send us your suspension notice. We analyze the root cause for free." },
              { step: "02", title: "Appeal Strategy & Plan of Action", desc: "We craft a custom, professional Plan of Action (POA) tailored to your case." },
              { step: "03", title: "Submission Guidance & Follow-Up", desc: "We guide you through submission and handle any additional Amazon requests." },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg sm:text-xl font-bold mb-6 shadow-lg shadow-blue-900/20 shrink-0">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary leading-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/4" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Why Choose Us?
              </h2>
              <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
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
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/90 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 px-1">
                <Button onClick={scrollToConsult} size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-bold border-none h-14 px-8 text-base sm:text-lg">
                  Speak to an Expert
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
              </div>
            </div>
            
            <div className="hidden sm:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                <img 
                  src={trustBadge} 
                  alt="Trust Badge" 
                  className="relative w-48 h-48 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-[pulse-slow_3s_ease-in-out_infinite]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight px-2">Stop Losing Sales Due to Suspension</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 px-2 leading-relaxed">
            Every day your account is down, you're losing money and ranking. Let us help you get back to selling.
          </p>
          <div className="px-2">
            <Button onClick={scrollToConsult} size="lg" className="w-full sm:w-auto h-16 px-6 sm:px-10 text-base sm:text-xl bg-green-600 hover:bg-green-700 text-white shadow-xl shadow-green-900/10">
              <MessageCircle className="mr-3 h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
              <span className="truncate">Chat with an Expert Now</span>
            </Button>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-4 px-4 leading-normal">
            * We respect your privacy. Your information is kept strictly confidential.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50 border-b overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Real Results for Amazon Sellers</h2>
            <p className="text-muted-foreground">
              We have assisted sellers facing account suspensions, listing deactivations, and performance-related issues. Here are examples of reinstatement outcomes and client feedback.
            </p>
          </div>

          <ReviewCarousel scrollToConsult={scrollToConsult} />

          <div className="text-center max-w-2xl mx-auto mt-12">
            <p className="text-[10px] sm:text-xs text-muted-foreground mb-8">
              Results vary depending on account circumstances. We provide professional appeal strategy and compliance support. Client details are partially redacted for privacy.
            </p>
            <Button onClick={scrollToConsult} size="lg" className="w-full sm:w-auto h-14 px-8 bg-green-600 hover:bg-green-700 text-white shadow-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Free Account Review
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-primary leading-tight">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border px-3 sm:px-5">
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
                <AccordionTrigger className="text-left font-medium text-base sm:text-lg py-5 sm:py-6">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="font-serif font-bold text-xl sm:text-2xl mb-6 flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0" />
            <span>The Upthrive Solution</span>
          </div>
          <p className="text-blue-200 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed px-4">
            Professional Amazon reinstatement and ecommerce cybersecurity services for sellers worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-xs sm:text-sm">
            <button className="text-white hover:text-accent transition-colors" onClick={scrollToConsult}>Contact Support</button>
            <button className="text-white hover:text-accent transition-colors">Terms of Service</button>
            <button className="text-white hover:text-accent transition-colors">Privacy Policy</button>
          </div>
          
          <div className="text-[10px] sm:text-xs text-blue-300/60 max-w-2xl mx-auto leading-relaxed px-4">
            Disclaimer: The Upthrive Solution is a third-party consulting agency and is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. Results depend on Amazon's final decision and cannot be guaranteed.
          </div>
          <div className="mt-8 text-[10px] sm:text-sm text-blue-300/40">
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1.5 rounded shadow-lg text-xs sm:text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden xs:block">
          Need help? Chat now
        </span>
      </motion.button>
    </div>
  );
}

function ReviewCarousel({ scrollToConsult }: { scrollToConsult: () => void }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const reviews = [
    {
      type: "Section 3 Suspension",
      text: "Our account was suspended under Section 3 and previous appeals were rejected. The appeal strategy provided was structured and compliance-focused. We were reinstated within 7 days.",
      label: "US Seller",
      status: "Account Restored"
    },
    {
      type: "Inauthentic Claim",
      text: "We struggled with inauthentic complaints for weeks. After proper documentation review and appeal submission, our listings were restored.",
      label: "UK Seller",
      status: "Reinstated"
    },
    {
      type: "Related Account",
      text: "Our related account issue was complex. The guidance we received helped us address Amazon’s concerns properly and regain access.",
      label: "EU Seller",
      status: "Account Restored"
    },
    {
      type: "Cybersecurity Audit",
      text: "After a major breach, they hardened our Shopify store and removed malicious scripts. We haven't had a security issue since.",
      label: "Ecommerce Brand",
      status: "Secured"
    },
    {
      type: "Malware Removal",
      text: "Our site was blacklisted by Google due to malware. They cleared the infection and got us back online in 24 hours.",
      label: "Global Retailer",
      status: "Cleaned & Protected"
    },
    {
      type: "IP Complaint",
      text: "Handled multiple IP complaints that were blocking our top-selling ASINs. Very professional and fast service.",
      label: "CA Seller",
      status: "Listings Restored"
    },
    {
      type: "Drop Shipping Policy",
      text: "Expertly navigated a Section 3 drop shipping violation. Their POA was exactly what Amazon needed to see.",
      label: "US Seller",
      status: "Reinstated"
    },
    {
      type: "Brand Registry Issues",
      text: "Helped us fix brand registry access problems that were affecting our advertising. Exceptional support.",
      label: "EU Brand",
      status: "Resolved"
    },
    {
      type: "Website Hardening",
      text: "Implemented advanced security measures for our custom checkout. The peace of mind is worth every penny.",
      label: "High Volume Seller",
      status: "Fully Hardened"
    },
    {
      type: "Review Manipulation",
      text: "Managed a very difficult review manipulation case that we thought was hopeless. Truly experts in Amazon policy.",
      label: "Global Seller",
      status: "Reinstated"
    }
  ];

  return (
    <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="embla__container flex">
        {reviews.map((review, i) => (
          <div key={i} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-4">
            <Card className="h-full border-none shadow-md bg-white overflow-hidden group hover:shadow-xl transition-all">
              <div className="h-1.5 bg-primary w-full" />
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {review.type}
                  </span>
                  <div className="flex text-yellow-500 scale-75 origin-right">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-slate-100 -z-0" />
                  <p className="text-sm italic text-slate-700 leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-500">{review.label}</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                    <CheckCircle2 className="h-3 w-3" />
                    {review.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
