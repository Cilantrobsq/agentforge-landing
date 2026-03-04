"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Brain,
  Search,
  Code,
  Megaphone,
  ShieldCheck,
  Server,
  Check,
  X,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Mail,
  BarChart3,
  Calendar,
  Globe,
  Shield,
} from "lucide-react";

const stats = [
  { value: "48h", label: "Deploy time", icon: Clock },
  { value: "24/7", label: "Autonomous", icon: Zap },
  { value: "94%", label: "Gross margin", icon: TrendingUp },
  { value: "5", label: "Specialized agents", icon: Users },
];

const problems = [
  "Your SDR costs $60-80k/year and handles 50 leads at a time",
  "Salespeople spend 30-40% of their time on CRM admin, not selling",
  "No-code tools promise automation but need a dev to set up and maintain",
  "Enterprise AI consultants charge $500k+ and take 6-18 months",
];

const solutions = [
  "Multi-agent AI system: lead gen, CRM, outreach, content, calendar",
  "Deployed on your infrastructure in 48-72 hours, not months",
  "Fully managed: we monitor, maintain, and optimize continuously",
  "Fraction of the cost of an SDR, with 10x the throughput",
];

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "15-minute call to understand your workflows, pain points, and goals. We map which processes can be automated and estimate ROI.",
    time: "Day 1",
  },
  {
    step: "02",
    title: "Build & Deploy",
    desc: "We configure your agent fleet: lead scraping, outreach sequences, CRM pipeline, email triage, whatever you need. Deployed on your infrastructure or ours.",
    time: "Days 2-4",
  },
  {
    step: "03",
    title: "Monitor & Optimize",
    desc: "Agents run autonomously 24/7. We monitor performance, handle edge cases, and continuously optimize. Monthly ROI reports included.",
    time: "Ongoing",
  },
];

const caseStudyMetrics = [
  {
    metric: "55+",
    label: "Leads in CRM pipeline",
    detail: "Auto-scraped from LinkedIn, qualified by AI",
  },
  {
    metric: "5",
    label: "Specialized AI agents",
    detail: "Research, code, marketing, QA, DevOps working in parallel",
  },
  {
    metric: "0",
    label: "Human hours per day on ops",
    detail: "Outreach, CRM, content, email handled autonomously",
  },
  {
    metric: "24/7",
    label: "Uptime",
    detail: "Heartbeat monitoring, auto-recovery, stale detection",
  },
  {
    metric: "15min",
    label: "Reply detection cycle",
    detail: "Gmail and LinkedIn DM scanning, auto-routing to pipeline",
  },
  {
    metric: "< $200",
    label: "Monthly operating cost",
    detail: "API calls + compute. No SaaS subscriptions, no headcount",
  },
];

const agents = [
  {
    name: "Orchestrator",
    role: "Plans, routes, and oversees all agent activity",
    icon: Brain,
    color: "text-indigo",
  },
  {
    name: "Researcher",
    role: "Deep analysis, web research, competitive intelligence",
    icon: Search,
    color: "text-purple-400",
  },
  {
    name: "Developer",
    role: "Code implementation, integrations, automation scripts",
    icon: Code,
    color: "text-cyan-400",
  },
  {
    name: "Marketer",
    role: "Copywriting, content strategy, SEO, outreach sequences",
    icon: Megaphone,
    color: "text-warning",
  },
  {
    name: "QA Engineer",
    role: "Testing, validation, code review, security audits",
    icon: ShieldCheck,
    color: "text-success",
  },
  {
    name: "DevOps",
    role: "Infrastructure, Docker, CI/CD, deployment, monitoring",
    icon: Server,
    color: "text-red-400",
  },
];

const dailyTasks = [
  { icon: Users, text: "LinkedIn lead scraping, connection requests, and DM outreach" },
  { icon: Mail, text: "Email triage, classification, and auto-response" },
  { icon: BarChart3, text: "CRM pipeline management with full analytics" },
  { icon: Globe, text: "Content creation and social media posting" },
  { icon: Calendar, text: "Calendar management and meeting prep briefings" },
  { icon: Search, text: "Market research and competitive intelligence" },
  { icon: Shield, text: "QA, testing, and code review for internal projects" },
  { icon: Server, text: "DevOps, deployment, monitoring, and system health checks" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$5,000",
    monthly: "setup + $1,500/mo",
    features: [
      "LinkedIn outreach automation",
      "Email outreach sequences",
      "CRM pipeline with analytics",
      "Reply detection and routing",
      "Monthly performance reports",
      "2-week deployment",
    ],
    cta: "Get Started",
    href: "https://buy.stripe.com/fZu4gzewC4hBdcngmsb3q00",
    popular: false,
  },
  {
    name: "Growth",
    price: "$8,000",
    monthly: "setup + $3,500/mo",
    features: [
      "Everything in Starter",
      "Full multi-agent system (5+ agents)",
      "Content creation and social media",
      "Calendar management and meeting prep",
      "Market research and competitive intel",
      "Custom workflow automation",
      "Priority support",
    ],
    cta: "Get Started",
    href: "https://buy.stripe.com/6oUcN5fAG01lb4f0nub3q01",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    monthly: "from $12,000 setup + $7,500/mo",
    features: [
      "Everything in Growth",
      "Dedicated infrastructure",
      "White-glove onboarding",
      "Custom agent development",
      "SLA with uptime guarantees",
      "On-premise deployment option",
      "Quarterly strategy reviews",
    ],
    cta: "Contact Us",
    href: "mailto:paul.be@sapienstream.com?subject=Enterprise%20Inquiry",
    popular: false,
  },
];

const faqs = [
  {
    q: "How is this different from Zapier or n8n?",
    a: "Those are DIY tools that require technical skill to set up and maintain. We build, deploy, and manage the entire system for you. Our agents are multi-step, context-aware AI, not simple if-then automations.",
  },
  {
    q: "Do the agents run on my infrastructure?",
    a: "Yes, by default. Your data stays on your servers. We can also host for you if preferred. Either way, you own your data.",
  },
  {
    q: "What if something breaks?",
    a: "Our agents have built-in health monitoring, auto-recovery, and stale detection. We are alerted to issues before you notice them. All plans include ongoing maintenance.",
  },
  {
    q: "How fast can you deploy?",
    a: "Starter packages deploy in under 2 weeks. Growth packages in 2-3 weeks. This is not a 6-month consulting engagement.",
  },
  {
    q: "Can I see it working before I buy?",
    a: "Absolutely. On our discovery call, we will show you our own production system running live. Real data, real workflows, real results.",
  },
  {
    q: "What is the minimum commitment?",
    a: "3-month minimum on retainer plans. This gives the agents enough time to learn your workflows and demonstrate measurable ROI.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-primary">Sapien</span>Stream
          </div>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#how-it-works" className="transition hover:text-foreground">
              How It Works
            </a>
            <a href="#case-study" className="transition hover:text-foreground">
              Case Study
            </a>
            <a href="#pricing" className="transition hover:text-foreground">
              Pricing
            </a>
          </div>
          <Button asChild size="sm">
            <a href="#pricing">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99, 102, 241, 0.12), transparent)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Badge variant="outline" className="mb-6 border-border px-4 py-1.5 text-sm text-muted-foreground">
            Currently onboarding 3 new clients
          </Badge>
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
            AI Agents That
            <br />
            <span className="text-primary">Actually Work</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We don&apos;t sell tools. We sell results. Autonomous AI agents
            handling your lead generation, CRM, outreach, and operations.
            Running 24/7 on your infrastructure.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="px-8">
              <a href="#pricing">
                See Pricing
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <a href="#case-study">See It In Action</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card text-center">
              <CardContent className="pt-6">
                <stat.icon className="mx-auto mb-2 size-5 text-primary" />
                <div className="mb-1 text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-red-500/20 bg-red-500/5">
            <CardHeader>
              <CardTitle className="text-2xl text-red-400">The Problem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3 text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                  <span>{problem}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-success/20 bg-success/5">
            <CardHeader>
              <CardTitle className="text-2xl text-success">Our Solution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {solutions.map((solution) => (
                <div key={solution} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" />
                  <span>{solution}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-4xl font-bold">How It Works</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          From first call to live agents in under a week. No lengthy discovery
          phases, no bloated SOWs.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="border-border bg-card transition hover:border-primary/30"
            >
              <CardHeader>
                <Badge variant="secondary" className="w-fit font-mono text-primary">
                  {item.step}
                </Badge>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{item.desc}</p>
                <Badge variant="outline" className="text-primary">
                  {item.time}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Case Study */}
      <section id="case-study" className="bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Badge className="mx-auto mb-4 block w-fit">Live Case Study</Badge>
          <h2 className="mb-4 text-center text-4xl font-bold">
            We Run What We Sell
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            Our own business runs on the exact same agent system we deploy for
            clients. These are real numbers from our production environment.
          </p>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyMetrics.map((item) => (
              <Card key={item.label} className="border-border bg-background">
                <CardContent className="pt-6">
                  <div className="mb-1 text-3xl font-bold text-primary">
                    {item.metric}
                  </div>
                  <div className="mb-2 font-medium">{item.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.detail}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="text-xl">What Our Agents Handle Daily</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {dailyTasks.map((task) => (
                  <div key={task.text} className="flex gap-3 text-muted-foreground">
                    <task.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">{task.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agent Fleet */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Your Agent Fleet
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Not a single chatbot. A coordinated team of specialized AI agents,
          each purpose-built for a specific function, orchestrated by a central
          intelligence.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card
              key={agent.name}
              className="border-border bg-card transition hover:border-primary/30"
            >
              <CardContent className="pt-6">
                <agent.icon className={`mb-3 size-6 ${agent.color}`} />
                <h3 className="mb-1 text-lg font-bold">{agent.name}</h3>
                <p className="text-sm text-muted-foreground">{agent.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Pricing */}
      <section id="pricing" className="bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Simple Pricing
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
            No surprise fees. No long contracts. Start with an audit or go
            straight to deployment.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative bg-background ${
                  plan.popular
                    ? "border-2 border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardDescription className="text-xs font-medium tracking-widest uppercase">
                    {plan.name}
                  </CardDescription>
                  <CardTitle className="text-4xl">{plan.price}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.monthly}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    <a href={plan.href} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Common Questions
        </h2>
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Put AI to Work?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Book a 15-minute discovery call. We will show you our live system
            and map out exactly what agents can do for your business.
          </p>
          <Button asChild size="lg" className="px-10">
            <a href="mailto:paul.be@sapienstream.com?subject=Discovery%20Call%20Request&body=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20SapienStream%27s%20AI%20agent%20services.%20Let%27s%20schedule%20a%20call.">
              Book a Discovery Call
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SapienStream. The Blacksquid
            Research GmbH.
          </div>
          <a
            href="mailto:paul.be@sapienstream.com"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            paul.be@sapienstream.com
          </a>
        </div>
      </footer>
    </main>
  );
}
