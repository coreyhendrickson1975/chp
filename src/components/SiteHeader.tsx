import { useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <a
            href="/"
            className="text-sm font-medium uppercase tracking-widest text-foreground"
          >
            Corey Hendrickson Productions
          </a>

          <div className="flex items-center gap-5">
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
        </div>
      )}
    </>
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
