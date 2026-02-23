import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <a href="/" className="flex flex-col leading-tight">
            <span className="text-sm font-medium uppercase tracking-widest text-foreground">
              Corey Hendrickson Productions
            </span>
            <span className="font-slab text-xs font-semibold italic tracking-wider text-muted-foreground">
              Focused on your why, not just the what.
            </span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href="/#work"
              className="hidden text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 md:inline-block"
            >
              Work
            </a>
            <a
              href="/process"
              className="hidden text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 md:inline-block"
            >
              Process
            </a>
            <a
              href="/clients"
              className="hidden text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 md:inline-block"
            >
              Clients
            </a>
            <a
              href="/about"
              className="hidden text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 md:inline-block"
            >
              About
            </a>
            <a
              href="/contact"
              className="hidden text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 md:inline-block"
            >
              Contact
            </a>
            <div className="hidden items-center gap-4 md:flex">
              <a
                href="https://www.instagram.com/vermontcorey/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground transition-opacity hover:opacity-60"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/coreyhendrickson/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground transition-opacity hover:opacity-60"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xs font-medium uppercase tracking-widest text-foreground transition-opacity hover:opacity-60 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background pt-20 md:hidden">
          <a
            href="/#work"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="/process"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </a>
          <a
            href="/clients"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Clients
          </a>
          <a
            href="/about"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/vermontcorey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/coreyhendrickson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            LinkedIn
          </a>
        </div>
      )}
    </>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
