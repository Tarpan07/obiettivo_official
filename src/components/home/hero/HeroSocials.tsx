"use client";

import Link from "next/link";

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Instagram = ({ size = 24, className, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, className, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 24, className, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const Linkedin = ({ size = 24, className, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/share/1DUPsVrAYf/",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@obiettivo-photographyclubn5412?si=SMkBBy0GHxzY4KtU",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/obiettivo_official?igsh=MTN4ZjB6cm1sMDloZQ==",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/obiettivo/",
  },
];

export default function HeroSocials() {
  return (
    <div className="absolute right-[5%] top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
      <div className="flex flex-col gap-7">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <Icon
                size={20}
                className="text-white/35 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
              />

              <span
                className="
                pointer-events-none
                absolute
                right-10
                top-1/2
                -translate-y-1/2
                whitespace-nowrap
                rounded-md
                border
                border-white/10
                bg-black/80
                px-3
                py-1.5
                text-xs
                text-white
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
                "
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}