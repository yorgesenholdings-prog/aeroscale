"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { primaryCta, serviceNavLinks } from "@/config/navigation";
import { trackEvent } from "@/lib/analytics";

const navLinksBeforeServices = [{ label: "About", href: "/about" }];
const navLinksAfterServices = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Growth Scorecard", href: "/growth-scorecard" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeAll() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-white">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinksBeforeServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:text-teal-text"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:text-teal-text"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              onClick={() => setDesktopServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            {desktopServicesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full z-50 mt-2 w-[36rem] -translate-x-1/2 rounded-xl border border-border-subtle bg-white p-4 shadow-lg"
              >
                <div className="grid grid-cols-2 gap-1">
                  {serviceNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      className="rounded-lg px-3 py-2 text-sm font-medium text-text-primary hover:bg-surface-muted hover:text-teal-text"
                      onClick={closeAll}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 border-t border-border-subtle pt-2">
                  <Link
                    href="/services"
                    role="menuitem"
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-teal-text hover:bg-surface-muted"
                    onClick={closeAll}
                  >
                    View all services
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinksAfterServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-text-primary hover:text-teal-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={primaryCta.href}
            size="md"
            onClick={() => trackEvent("assessment_cta_clicked", { location: "header" })}
          >
            {primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-slate lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border-subtle bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            <Link
              href="/about"
              className="rounded-md px-3 py-3 text-base font-medium text-text-primary hover:bg-surface-muted"
              onClick={closeAll}
            >
              About
            </Link>

            <button
              type="button"
              className="flex items-center justify-between rounded-md px-3 py-3 text-base font-medium text-text-primary hover:bg-surface-muted"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-panel"
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown
                size={18}
                aria-hidden="true"
                className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"}
              />
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services-panel" className="flex flex-col gap-1 pl-4">
                {serviceNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-text-muted hover:bg-surface-muted hover:text-teal-text"
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-teal-text hover:bg-surface-muted"
                  onClick={closeAll}
                >
                  View all services
                </Link>
              </div>
            )}

            {navLinksAfterServices.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-text-primary hover:bg-surface-muted"
                onClick={closeAll}
              >
                {link.label}
              </Link>
            ))}

            <Button href={primaryCta.href} size="md" className="mt-3 w-full" onClick={closeAll}>
              {primaryCta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
