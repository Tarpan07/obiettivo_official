"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle2
} from "lucide-react";

// Brand icons as inline SVGs for compatibility
const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const data = {
  facebookLink: "https://facebook.com/obiettivo.nits",
  instaLink: "https://instagram.com/obiettivo.nits",
  twitterLink: "https://twitter.com/obiettivo_nits",
  githubLink: "https://github.com/obiettivo-nits",
  services: {
    coverage: "/services/coverage",
    workshops: "/services/workshops",
    collabs: "/services/collaborations",
    gallery: "/services/gallery",
  },
  about: {
    history: "/about",
    team: "/team",
    handbook: "/guidelines",
    careers: "/careers",
  },
  help: {
    faqs: "/faqs",
    support: "/support",
    livechat: "/live-chat",
  },
  contact: {
    email: "obiettivo@nits.ac.in",
    phone: "+91 8637373116",
    address: "NIT Silchar, Cachar, Assam, India - 788010",
  },
  company: {
    name: "Obiettivo",
    description:
      "The Official Photography Club of NIT Silchar. Building beautiful visual narratives, capturing campus life, and inspiring creative expression since 2018.",
    logo: "/logo.png",
  },
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Github, label: "GitHub", href: data.githubLink },
];

const aboutLinks = [
  { text: "Club History", href: data.about.history },
  { text: "Meet the Team", href: data.about.team },
  { text: "Club Guidelines", href: data.about.handbook },
  { text: "Recruitments", href: data.about.careers },
];

const serviceLinks = [
  { text: "Event Coverage", href: data.services.coverage },
  { text: "Creative Workshops", href: data.services.workshops },
  { text: "Collaborations", href: data.services.collabs },
  { text: "Archived Galleries", href: data.services.gallery },
];

const helpfulLinks = [
  { text: "FAQs", href: data.help.faqs },
  { text: "Support Desk", href: data.help.support },
  { text: "Live Chat", href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone}` },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  if (pathname === "/team") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !description) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setEmail("");
      setDescription("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="mt-auto w-full border-t border-white/5 bg-[#050505] text-zinc-400 font-[family-name:var(--font-sora)] select-none">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img
                src={data.company.logo}
                alt="Obiettivo Logo"
                className="h-9 w-9 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
              <span className="text-xl font-bold tracking-wider text-white font-[family-name:var(--font-sora)]">
                {data.company.name}
              </span>
            </div>

            <p className="mt-5 text-sm font-light leading-relaxed text-zinc-500 max-w-sm">
              {data.company.description}
            </p>

            {/* Social Icons */}
            <ul className="mt-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-zinc-950/40 text-zinc-500 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-950/10 hover:text-blue-400 cursor-pointer"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="h-4.5 w-4.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div className="flex flex-col">
              <p className="text-sm font-semibold tracking-wider text-zinc-300 uppercase font-[family-name:var(--font-syncopate)] text-[10px]">
                Links
              </p>
              <ul className="mt-6 space-y-3.5 text-xs font-light">
                {aboutLinks.concat(helpfulLinks.slice(0, 2)).map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className="text-zinc-500 hover:text-zinc-300 transition duration-300"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold tracking-wider text-zinc-300 uppercase font-[family-name:var(--font-syncopate)] text-[10px]">
                Contact Info
              </p>
              <ul className="mt-6 space-y-4 text-xs font-light">
                {contactInfo.map(({ icon: Icon, text, href, isAddress }) => (
                  <li key={text}>
                    {href ? (
                      <a
                        href={href}
                        className="group flex items-start gap-2.5 text-zinc-500 hover:text-zinc-300 transition duration-300"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-zinc-600 group-hover:text-blue-400 transition duration-300" />
                        <span className="flex-1 break-all">{text}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-2.5 text-zinc-500">
                        <Icon className="h-4 w-4 shrink-0 text-zinc-600" />
                        {isAddress ? (
                          <address className="flex-1 not-italic leading-relaxed">{text}</address>
                        ) : (
                          <span className="flex-1">{text}</span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Form Column (Spans full on small) */}
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <p className="text-sm font-semibold tracking-wider text-zinc-300 uppercase font-[family-name:var(--font-syncopate)] text-[10px]">
                Quick Enquiry
              </p>
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "sending" || status === "sent"}
                    className="w-full rounded-md border border-white/5 bg-zinc-950/60 px-3.5 py-2 text-xs text-white placeholder-zinc-600 focus:border-blue-500/50 focus:outline-none transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Description Input */}
                <div className="relative">
                  <textarea
                    required
                    rows={2}
                    placeholder="Describe your query..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={status === "sending" || status === "sent"}
                    className="w-full rounded-md border border-white/5 bg-zinc-950/60 px-3.5 py-2 text-xs text-white placeholder-zinc-600 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent" || !email || !description}
                  className="
                    w-full
                    group
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-blue-600
                    py-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white
                    transition-all
                    duration-300
                    hover:bg-blue-500
                    disabled:bg-zinc-800
                    disabled:text-zinc-600
                    disabled:cursor-not-allowed
                    cursor-pointer
                  "
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === "sent" ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 text-green-400" />
                      <span className="text-green-400">Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-600">
          <p>&copy; 2026 {data.company.name} Club. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-400 transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-400 transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
