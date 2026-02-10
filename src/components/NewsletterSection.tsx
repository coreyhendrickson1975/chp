import React from "react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="border-t border-border px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-8 text-2xl font-normal text-foreground md:text-3xl">
          Subscribe
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          Sign up with your email address to receive news and updates.
        </p>

        {submitted ? (
          <p className="text-sm font-medium text-foreground">Thank you!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="border-b border-foreground/30 bg-transparent px-0 py-3 text-center text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="mx-auto mt-2 border border-foreground bg-foreground px-8 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-foreground"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
