import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-12 border border-border p-10 text-center">
        <p className="text-lg font-medium text-foreground">
          Thank you for reaching out.
        </p>
        <p className="mt-2 text-muted-foreground">
          I{"'"}ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-12 flex flex-col gap-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
          placeholder="Project inquiry"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
          placeholder="Tell me about your project..."
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-foreground px-8 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-80"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
