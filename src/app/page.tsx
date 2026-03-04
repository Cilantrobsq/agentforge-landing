export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-[var(--color-accent-light)]">Sapien</span>
            Stream
          </div>
          <div className="hidden gap-8 text-sm text-[var(--color-text-muted)] md:flex">
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#case-study" className="transition hover:text-white">
              Case Study
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
          </div>
          <a
            href="#pricing"
            className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-light)]"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, var(--color-accent-glow), transparent)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 text-sm text-[var(--color-text-muted)]">
            Currently onboarding 3 new clients
          </div>
          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
            AI Agents That
            <br />
            <span className="text-[var(--color-accent-light)]">
              Actually Work
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
            We don&apos;t sell tools. We sell results. Autonomous AI agents
            handling your lead generation, CRM, outreach, and operations.
            Running 24/7 on your infrastructure.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-medium text-white transition hover:bg-[var(--color-accent-light)]"
            >
              See Pricing
            </a>
            <a
              href="#case-study"
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-8 py-3.5 text-base font-medium text-[var(--color-text)] transition hover:bg-[var(--color-bg-card-hover)]"
            >
              See It In Action
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "48h", label: "Deploy time" },
            { value: "24/7", label: "Autonomous" },
            { value: "94%", label: "Gross margin" },
            { value: "5", label: "Specialized agents" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-center"
            >
              <div className="mb-1 text-3xl font-bold text-[var(--color-accent-light)]">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="mb-6 text-2xl font-bold text-red-400">
              The Problem
            </h3>
            <ul className="space-y-4 text-[var(--color-text-muted)]">
              <li className="flex gap-3">
                <span className="mt-1 text-red-400">x</span>
                <span>
                  Your SDR costs $60-80k/year and handles 50 leads at a time
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-red-400">x</span>
                <span>
                  Salespeople spend 30-40% of their time on CRM admin, not
                  selling
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-red-400">x</span>
                <span>
                  No-code tools promise automation but need a dev to set up and
                  maintain
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-red-400">x</span>
                <span>
                  Enterprise AI consultants charge $500k+ and take 6-18 months
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--color-success)]/20 bg-[var(--color-success)]/5 p-8">
            <h3 className="mb-6 text-2xl font-bold text-[var(--color-success)]">
              Our Solution
            </h3>
            <ul className="space-y-4 text-[var(--color-text-muted)]">
              <li className="flex gap-3">
                <span className="mt-1 text-[var(--color-success)]">
                  &#10003;
                </span>
                <span>
                  Multi-agent AI system: lead gen, CRM, outreach, content,
                  calendar
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[var(--color-success)]">
                  &#10003;
                </span>
                <span>
                  Deployed on your infrastructure in 48-72 hours, not months
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[var(--color-success)]">
                  &#10003;
                </span>
                <span>
                  Fully managed: we monitor, maintain, and optimize continuously
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[var(--color-success)]">
                  &#10003;
                </span>
                <span>
                  Fraction of the cost of an SDR, with 10x the throughput
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-4xl font-bold">How It Works</h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--color-text-muted)]">
          From first call to live agents in under a week. No lengthy discovery
          phases, no bloated SOWs.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
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
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 transition hover:border-[var(--color-accent)]/30"
            >
              <div className="mb-4 text-sm font-mono text-[var(--color-accent-light)]">
                {item.step}
              </div>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="mb-4 text-[var(--color-text-muted)]">
                {item.desc}
              </p>
              <div className="text-sm font-medium text-[var(--color-accent-light)]">
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section
        id="case-study"
        className="border-y border-[var(--color-border)] bg-[var(--color-bg-card)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-4 text-center text-sm font-medium tracking-widest text-[var(--color-accent-light)] uppercase">
            Live Case Study
          </div>
          <h2 className="mb-4 text-center text-4xl font-bold">
            We Run What We Sell
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--color-text-muted)]">
            Our own business runs on the exact same agent system we deploy for
            clients. These are real numbers from our production environment.
          </p>

          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                metric: "55+",
                label: "Leads in CRM pipeline",
                detail: "Auto-scraped from LinkedIn, qualified by AI",
              },
              {
                metric: "5",
                label: "Specialized AI agents",
                detail:
                  "Research, code, marketing, QA, DevOps working in parallel",
              },
              {
                metric: "0",
                label: "Human hours per day on operations",
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
                detail:
                  "Gmail and LinkedIn DM scanning, auto-routing to pipeline",
              },
              {
                metric: "< $200",
                label: "Monthly operating cost",
                detail:
                  "API calls + compute. No SaaS subscriptions, no headcount",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
              >
                <div className="mb-1 text-3xl font-bold text-[var(--color-accent-light)]">
                  {item.metric}
                </div>
                <div className="mb-2 font-medium">{item.label}</div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
            <h3 className="mb-4 text-xl font-bold">
              What Our Agents Handle Daily
            </h3>
            <div className="grid gap-4 text-[var(--color-text-muted)] sm:grid-cols-2">
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                LinkedIn lead scraping, connection requests, and DM outreach
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                Email triage, classification, and auto-response
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                CRM pipeline management with full analytics
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                Content creation and social media posting
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                Calendar management and meeting prep briefings
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                Market research and competitive intelligence
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                QA, testing, and code review for internal projects
              </div>
              <div className="flex gap-3">
                <span className="text-[var(--color-accent-light)]">
                  &#10003;
                </span>
                DevOps, deployment, monitoring, and system health checks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Fleet */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Your Agent Fleet
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--color-text-muted)]">
          Not a single chatbot. A coordinated team of specialized AI agents,
          each purpose-built for a specific function, orchestrated by a central
          intelligence.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Orchestrator",
              role: "Plans, routes, and oversees all agent activity",
              color: "#6366f1",
            },
            {
              name: "Researcher",
              role: "Deep analysis, web research, competitive intelligence",
              color: "#8b5cf6",
            },
            {
              name: "Developer",
              role: "Code implementation, integrations, automation scripts",
              color: "#06b6d4",
            },
            {
              name: "Marketer",
              role: "Copywriting, content strategy, SEO, outreach sequences",
              color: "#f59e0b",
            },
            {
              name: "QA Engineer",
              role: "Testing, validation, code review, security audits",
              color: "#22c55e",
            },
            {
              name: "DevOps",
              role: "Infrastructure, Docker, CI/CD, deployment, monitoring",
              color: "#ef4444",
            },
          ].map((agent) => (
            <div
              key={agent.name}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition hover:border-[var(--color-accent)]/30"
            >
              <div
                className="mb-3 h-2 w-8 rounded-full"
                style={{ background: agent.color }}
              />
              <h3 className="mb-1 text-lg font-bold">{agent.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {agent.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Simple Pricing
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-[var(--color-text-muted)]">
            No surprise fees. No long contracts. Start with an audit or go
            straight to deployment.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Starter */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
              <div className="mb-2 text-sm font-medium tracking-widest text-[var(--color-text-muted)] uppercase">
                Starter
              </div>
              <div className="mb-1 text-4xl font-bold">$5,000</div>
              <div className="mb-6 text-[var(--color-text-muted)]">
                setup + $1,500/mo
              </div>
              <ul className="mb-8 space-y-3 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  LinkedIn outreach automation
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Email outreach sequences
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  CRM pipeline with analytics
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Reply detection and routing
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Monthly performance reports
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  2-week deployment
                </li>
              </ul>
              <a
                href="mailto:paul.be@sapienstream.com?subject=Starter%20Plan%20Inquiry"
                className="block rounded-lg border border-[var(--color-border)] py-3 text-center text-sm font-medium transition hover:bg-[var(--color-bg-card-hover)]"
              >
                Get Started
              </a>
            </div>

            {/* Growth */}
            <div className="relative rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-bg)] p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-accent)] px-4 py-1 text-xs font-medium text-white">
                Most Popular
              </div>
              <div className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent-light)] uppercase">
                Growth
              </div>
              <div className="mb-1 text-4xl font-bold">$8,000</div>
              <div className="mb-6 text-[var(--color-text-muted)]">
                setup + $3,500/mo
              </div>
              <ul className="mb-8 space-y-3 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Everything in Starter
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Full multi-agent system (5+ agents)
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Content creation and social media
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Calendar management and meeting prep
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Market research and competitive intel
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Custom workflow automation
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Priority support
                </li>
              </ul>
              <a
                href="mailto:paul.be@sapienstream.com?subject=Growth%20Plan%20Inquiry"
                className="block rounded-lg bg-[var(--color-accent)] py-3 text-center text-sm font-medium text-white transition hover:bg-[var(--color-accent-light)]"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8">
              <div className="mb-2 text-sm font-medium tracking-widest text-[var(--color-text-muted)] uppercase">
                Enterprise
              </div>
              <div className="mb-1 text-4xl font-bold">Custom</div>
              <div className="mb-6 text-[var(--color-text-muted)]">
                from $12,000 setup + $7,500/mo
              </div>
              <ul className="mb-8 space-y-3 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Everything in Growth
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Dedicated infrastructure
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  White-glove onboarding
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Custom agent development
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  SLA with uptime guarantees
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  On-premise deployment option
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent-light)]">
                    &#10003;
                  </span>
                  Quarterly strategy reviews
                </li>
              </ul>
              <a
                href="mailto:paul.be@sapienstream.com?subject=Enterprise%20Inquiry"
                className="block rounded-lg border border-[var(--color-border)] py-3 text-center text-sm font-medium transition hover:bg-[var(--color-bg-card-hover)]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Common Questions
        </h2>
        <div className="space-y-6">
          {[
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
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
            >
              <h3 className="mb-2 font-bold">{item.q}</h3>
              <p className="text-[var(--color-text-muted)]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Put AI to Work?
          </h2>
          <p className="mb-8 text-lg text-[var(--color-text-muted)]">
            Book a 15-minute discovery call. We will show you our live system
            and map out exactly what agents can do for your business.
          </p>
          <a
            href="mailto:paul.be@sapienstream.com?subject=Discovery%20Call%20Request&body=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20SapienStream%27s%20AI%20agent%20services.%20Let%27s%20schedule%20a%20call."
            className="inline-block rounded-lg bg-[var(--color-accent)] px-10 py-4 text-base font-medium text-white transition hover:bg-[var(--color-accent-light)]"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} SapienStream. The Blacksquid
            Research GmbH.
          </div>
          <div className="flex gap-6 text-sm text-[var(--color-text-muted)]">
            <a
              href="mailto:paul.be@sapienstream.com"
              className="transition hover:text-white"
            >
              paul.be@sapienstream.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
