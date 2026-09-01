import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "https://twitter.com", label: "Twitter", external: true },
  { href: "https://linkedin.com", label: "LinkedIn", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-surface-50 dark:bg-surface-50 border-t border-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-[var(--margin-desktop)] py-8 max-w-[var(--container-max)] mx-auto gap-4">
        <Link href="/" className="text-title-lg font-display font-bold text-ink-900 opacity-80 hover:opacity-100 transition-opacity">
          Addis Hunt
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-label-sm font-display text-ink-500 hover:text-ink-900 transition-colors opacity-80 hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="text-body-sm font-body text-ink-500">
          © 2024 Addis Hunt. All rights reserved.
        </span>
      </div>
    </footer>
  );
}