"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Github, Linkedin, Mail, Menu, X, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Apps" }, // Portfolio ki jagah Apps zyada professional lagta hai Flutter ke liye
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for a premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header 
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "border-border/60 bg-bg/70 backdrop-blur-md py-2" 
          : "border-transparent bg-transparent py-4"
      )}
    >
      <div className="container-px flex h-16 items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Smartphone className="text-white" size={20} />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight text-white">{site.name}</div>
            <div className="text-[10px] uppercase tracking-wider text-blue-400 font-medium">
              {site.role || "Flutter Developer"}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl p-1 backdrop-blur-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                  active 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-text-muted hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center border-r border-border pr-3 gap-2">
            <a className="p-2 text-text-muted hover:text-blue-400 transition-colors" href={site.social.github} target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a className="p-2 text-text-muted hover:text-blue-400 transition-colors" href={site.social.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
          <Link 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-95" 
            href="/contact"
          >
            <Mail size={16} />
            <span>Hire Me</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-xl bg-white/5 border border-border text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-[100%] border-b border-border bg-bg/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
          <div className="container-px py-6 grid gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition",
                  pathname === item.href ? "bg-blue-600/10 text-blue-400" : "text-text-muted hover:bg-white/5"
                )}
              >
                {item.label}
                {pathname === item.href && <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex gap-3">
              <Link className="flex-1 btn btn-primary py-3 justify-center" href="/contact">
                Connect Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}