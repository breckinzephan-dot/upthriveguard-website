import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  ArrowLeft, 
  ShieldCheck, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  Shield,
  Search,
  Zap,
  Lock
} from "lucide-react";
import { useRoute, useLocation } from "wouter";

const solutionsData = {
  "account-deactivation": {
    title: "Account Deactivation",
    problem: "Your entire Amazon selling privilege has been revoked, often without a clear initial explanation, cutting off your primary revenue stream immediately.",
    reason: "Typically caused by severe or repeated policy violations, verification failures, or high-risk activity detected by Amazon's automated systems.",
    solution: "We perform a deep-dive forensic audit of your account history, identify the specific 'trigger' event, and craft a comprehensive Plan of Action (POA) that addresses root causes, immediate corrective actions, and long-term preventative measures.",
    benefits: ["Full account restoration", "Recovery of withheld funds", "Protection of brand reputation"]
  },
  "section-3-violations": {
    title: "Section 3 Violations",
    problem: "Amazon has flagged your account for 'Code of Conduct' violations, often related to drop shipping, virtual assistants, or business transparency.",
    reason: "Failure to follow Amazon's strict drop shipping policy or allowing unauthorized 3rd-party access to sensitive account areas.",
    solution: "Our experts specialize in Section 3 defense. We help you document your supply chain, verify your business identity, and prove compliance with Amazon's latest conduct requirements.",
    benefits: ["Policy compliance audit", "Supply chain verification", "Permanent reinstatement strategy"]
  },
  "inauthentic-complaints": {
    title: "Inauthentic Complaints",
    problem: "Customers or competitors have flagged your products as 'inauthentic', leading to inventory blocks and potential account suspension.",
    reason: "Inadequate invoicing, poor packaging, or malicious competitor attacks reporting fake items.",
    solution: "We review your supplier invoices against Amazon's strict requirements, assist in obtaining proper authorization letters, and draft appeals that prove your inventory's source beyond doubt.",
    benefits: ["Invoice verification", "ASIN restoration", "Competitor attack defense"]
  },
  "related-accounts": {
    title: "Related Accounts",
    problem: "Amazon has linked your account to another suspended account, leading to a permanent ban across both entities.",
    reason: "Shared IP addresses, credit cards, physical addresses, or even similar business names detected by Amazon's 'relation' algorithm.",
    solution: "We untangle the digital web connecting the accounts. We provide a structured legal and technical argument to prove independence or explain the legitimate link to secure a separation.",
    benefits: ["Account separation", "Digital footprint cleanup", "Re-linking prevention"]
  },
  "listing-suspension": {
    title: "Listing Suspension",
    problem: "Your top-selling ASINs have been deactivated, killing your organic ranking and daily sales volume.",
    reason: "High return rates, negative feedback, or specific policy flags on a product level.",
    solution: "We analyze the specific listing health metrics, identify the pain points causing customer dissatisfaction, and draft a product-specific POA to get your listings back online.",
    benefits: ["Organic rank recovery", "Sales volume restoration", "Listing health monitoring"]
  },
  "appeal-rejected": {
    title: "Appeal Rejected Cases",
    problem: "You've already submitted one or more appeals and received the dreaded 'We may not respond to further emails' message.",
    reason: "Generic templates, incomplete information, or failing to address Amazon's specific concerns in previous attempts.",
    solution: "This is our specialty. We treat these as 'critical' cases, performing a complete reset of the strategy and crafting a high-level executive appeal to senior Amazon investigators.",
    benefits: ["Expert level POA", "Executive escalation guidance", "Second-chance strategy"]
  },
  "policy-violations": {
    title: "Policy Violations",
    problem: "Flags for IP complaints, review manipulation, or fair pricing violations are threatening your account health.",
    reason: "Accidental use of trademarked terms or aggressive marketing tactics that trigger Amazon's protection bots.",
    solution: "We clean up your listings, handle the removal of offending content, and draft appeals that demonstrate a clear understanding of Amazon's complex policy landscape.",
    benefits: ["Clean account health dashboard", "Risk mitigation", "Future-proof compliance"]
  },
  "performance-issues": {
    title: "Performance Issues",
    problem: "Your account is 'At Risk' due to high ODR (Order Defect Rate), LSR (Late Shipment Rate), or VTR (Valid Tracking Rate).",
    reason: "Logistics failures, poor customer service response times, or warehouse management errors.",
    solution: "We develop a customized standard operating procedure (SOP) for your fulfillment team and present this to Amazon as a robust preventative plan to maintain account health.",
    benefits: ["Logistics SOP development", "Metric stabilization", "Permanent health improvement"]
  }
};

export default function SolutionDetail() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/solution/:id");
  const solutionId = params?.id;
  const solution = solutionsData[solutionId as keyof typeof solutionsData];

  const whatsappNumber = "+447482463166";
  const defaultMessage = encodeURIComponent(`Hello, I've read about your ${solution?.title || 'service'} and I need help with my Amazon account. Can we talk?`);
  
  const handleConsult = () => {
    window.open(`https://wa.me/${whatsappNumber.replace("+", "")}?text=${defaultMessage}`, "_blank");
  };

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Solution not found</h1>
          <Button onClick={() => setLocation("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 font-serif font-bold text-lg text-primary hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>The Upthrive Solution</span>
          </button>
          <Button onClick={handleConsult} size="sm" className="bg-green-600 hover:bg-green-700 text-white gap-2">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xs:inline">Expert Help</span>
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5" />
              Specialized Service
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-primary mb-6 leading-tight">
              {solution.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="md:col-span-2 border-none shadow-sm bg-slate-50">
              <CardContent className="p-8">
                <section className="mb-10">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    The Problem
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {solution.problem}
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Search className="h-5 w-5 text-blue-500" />
                    Root Causes
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {solution.reason}
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Our Solution Strategy
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {solution.solution}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Zap className="h-4 w-4 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </section>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8" />
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    Don't risk your account with another failed appeal. Speak to our experts today.
                  </p>
                  <Button onClick={handleConsult} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12 shadow-lg shadow-green-900/20">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with Expert
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-4 text-primary">Key Metrics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Success Rate</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Typical Turnaround</span>
                      <span className="font-bold text-blue-600">3-7 Days</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Support</span>
                      <span className="font-bold text-slate-700">24/7 Priority</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
             <div className="relative z-10">
               <h2 className="text-2xl font-bold mb-4">Prevent Future Suspensions</h2>
               <p className="text-slate-300 mb-8 max-w-2xl leading-relaxed">
                 Once we recover your account, we recommend our Ecommerce Cybersecurity suite to protect your business from malicious attacks and account takeovers.
               </p>
               <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                   <Lock className="h-4 w-4 text-blue-400" />
                   <span className="text-sm">Account Hardening</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                   <Shield className="h-4 w-4 text-blue-400" />
                   <span className="text-sm">24/7 Monitoring</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                   <Clock className="h-4 w-4 text-blue-400" />
                   <span className="text-sm">Immediate Incident Response</span>
                 </div>
               </div>
             </div>
          </section>
        </motion.div>
      </main>

      <footer className="bg-primary text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-blue-300/40">
            &copy; {new Date().getFullYear()} The Upthrive Solution. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
