import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  CodeXml,
  Landmark,
  PiggyBank,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import dashboardImage from "../assets/secure-business-dashboard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prady Technologies | Smart Business Software" },
      {
        name: "description",
        content: "Secure, efficient software systems built to help ambitious businesses grow.",
      },
      { property: "og:title", content: "Prady Technologies | Smart Business Software" },
      {
        property: "og:description",
        content: "Secure, efficient software systems built to help ambitious businesses grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const solutions = [
  {
    title: "Microfinance",
    description: "Lending and repayment management",
    icon: PiggyBank,
  },
  {
    title: "SACCO System",
    description: "Savings, loans and member services",
    icon: UsersRound,
  },
  {
    title: "Custom Software",
    description: "Purpose-built tools for your business",
    icon: CodeXml,
  },
  {
    title: "HR System",
    description: "People, payroll and operations",
    icon: BriefcaseBusiness,
  },
];

function Brand() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label="Prady Technologies home">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border-2 border-brand text-brand sm:h-12 sm:w-12">
        <Building2 className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
      </span>
      <span className="min-w-0 leading-none">
        <strong className="block truncate font-display text-lg text-brand sm:text-2xl">PRADY</strong>
        <span className="hidden text-[0.62rem] font-bold tracking-[0.15em] text-brand-soft sm:block">
          TECHNOLOGIES LTD
        </span>
      </span>
    </a>
  );
}

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-background">
      <header className="h-[60px] border-b border-border bg-background sm:h-[78px]">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-foreground lg:flex" aria-label="Main navigation">
            <a className="nav-link nav-link-active" href="#top">Home</a>
            <a className="nav-link" href="#solutions">Solutions</a>
            <a className="nav-link" href="#solutions">Products</a>
            <a className="nav-link" href="#solutions">Industries</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="mailto:hello@pradytechnologies.com">Contact</a>
          </nav>
          <a className="btn-primary hidden sm:inline-flex lg:ml-2" href="mailto:hello@pradytechnologies.com">
            Get Demo
          </a>
          <a className="btn-primary px-4 py-2 text-xs sm:hidden" href="mailto:hello@pradytechnologies.com">
            Get Demo
          </a>
        </div>
      </header>

      <section className="hero-surface relative overflow-hidden text-primary-foreground">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid h-[310px] max-w-7xl items-center px-4 sm:h-[380px] sm:grid-cols-[1.08fr_0.92fr] sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-2xl pb-24 sm:pb-0">
            <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-hero-muted sm:text-xs">
              Doing IT differently
            </p>
            <h1 className="font-display text-[2rem] leading-[1.03] font-bold sm:text-5xl lg:text-[3.45rem]">
              Smart Technology Solutions for Ambitious Businesses
            </h1>
            <p className="mt-3 max-w-xl text-sm font-medium text-hero-muted sm:mt-5 sm:text-lg">
              Secure, efficient software that turns complex operations into confident growth.
            </p>
            <div className="mt-4 flex gap-2.5 sm:mt-7 sm:gap-3">
              <a className="btn-light" href="mailto:hello@pradytechnologies.com">
                Get Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a className="btn-outline" href="#solutions">Our Products</a>
            </div>
          </div>
          <img
            src={dashboardImage}
            alt="Business analytics dashboard on a laptop"
            width={1408}
            height={912}
            className="absolute -right-14 bottom-0 h-[150px] w-auto object-contain sm:static sm:h-auto sm:max-h-[335px] sm:w-full"
          />
        </div>
      </section>

      <section id="solutions" className="bg-background px-4 py-3 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-2 text-center sm:mb-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand-soft sm:text-xs">Built for momentum</p>
            <h2 className="font-display text-xl font-bold text-brand sm:mt-1 sm:text-3xl">Our Solutions</h2>
            <p className="hidden text-sm text-muted-foreground sm:mt-1 sm:block">
              Connected systems designed to streamline operations and scale your business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
            {solutions.map(({ title, description, icon: Icon }) => (
              <article className="solution-card" key={title}>
                <span className="solution-icon"><Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.8} /></span>
                <h3 className="mt-1.5 font-display text-xs font-bold leading-tight text-brand sm:mt-3 sm:text-lg">{title}</h3>
                <p className="mt-0.5 line-clamp-2 text-[0.62rem] leading-tight text-muted-foreground sm:mt-1 sm:text-xs sm:leading-normal">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border bg-trust px-4 py-4 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 text-center text-[0.65rem] font-semibold text-foreground sm:text-sm">
          <div className="trust-item"><ShieldCheck /> <span>ISO 27001<br className="sm:hidden" /> Certified</span></div>
          <div className="trust-item"><Clock3 /> <span>99.9% Uptime</span></div>
          <div className="trust-item"><BadgeCheck /> <span>Trusted by 200+<br className="sm:hidden" /> Businesses</span></div>
        </div>
      </section>
    </main>
  );
}