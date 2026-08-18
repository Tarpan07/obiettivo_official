import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
    >
      {" "}
      <Image
        src="/logo.png"
        alt="Obiettivo Logo"
        width={36}
        height={36}
        priority
        className="transition-transform duration-300 group-hover:rotate-6"
      />
      <div className="leading-none">
        <h1 className="font-[family-name:var(--font-sora)] text-lg font-semibold tracking-wide text-white">
          Obiettivo
        </h1>
      </div>
    </Link>
  );
}
