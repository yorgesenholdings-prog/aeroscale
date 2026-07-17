import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/config/site";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerServiceLinks,
} from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-slate text-white">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm text-white/80">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Company" className="md:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-teal-on-slate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Services
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 hover:text-teal-on-slate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-white/65">
            AeroScale does not guarantee specific revenue, cost savings, financing,
            conversion rates, advertising results, or other business outcomes.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-teal-on-slate">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
