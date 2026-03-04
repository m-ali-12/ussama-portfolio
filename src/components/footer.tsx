import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg/40 backdrop-blur-md">
      <div className="container-px py-12 grid gap-10 md:grid-cols-3">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="text-lg font-bold tracking-tight text-white italic">
             {site.name}<span className="text-blue-500">.</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed max-w-xs">
            Specializing in high-performance **Flutter** mobile applications. 
            I bring ideas to life with seamless cross-platform experiences for Android & iOS.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-widest text-white/50">Quick Navigation</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-text-muted">
            <Link className="transition-colors hover:text-blue-400" href="/about">About</Link>
            <Link className="transition-colors hover:text-blue-400" href="/portfolio">Apps</Link>
            <Link className="transition-colors hover:text-blue-400" href="/services">Services</Link>
            <Link className="transition-colors hover:text-blue-400" href="/resume">Resume</Link>
            <Link className="transition-colors hover:text-blue-400" href="/contact">Hire Me</Link>
            <a 
              className="transition-colors hover:text-blue-400" 
              href={site.social.github} 
              target="_blank" 
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <div className="text-sm font-semibold uppercase tracking-widest text-white/50">Get In Touch</div>
          <div className="text-sm text-text-muted space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">@</span>
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📍</span>
              <span>{site.location}</span>
            </div>
            
            {/* Social Icons Placeholder or Tagline */}
            <div className="pt-2">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 border border-blue-500/20">
                Available for Remote Work
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-border/50 py-6 bg-black/20">
        <div className="container-px flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-text-faint">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
<p>
  Built with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
  <a 
    href="mailto:xyztool804@gmail.com" 
    className="text-white hover:text-blue-400 transition-colors underline-offset-4 hover:underline font-medium"
  >
    Syed Muhammad Ali Gillani
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}