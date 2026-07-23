"use client";

import { useState } from "react";
import Button from "../ui/Button";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Honeypot: hidden field only bots fill in
    const botcheck =
      (e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>(
        'input[name="botcheck"]'
      )?.value || "";

    try {
      const response = await fetch(
        "https://n8n.mataitech.co/webhook/contact-form-5db34a2e7a94be6800f5c805088ad8a7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            botcheck,
          }),
        }
      );

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-rule text-ink rounded focus:border-deep focus:ring-1 focus:ring-deep/30 outline-none transition-all duration-200 placeholder:text-ink-muted text-sm";

  const labelClass = "block font-mono text-[10px] tracking-[0.13em] uppercase font-semibold text-ink mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot: invisible to humans, bots fill it and get dropped */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-deep">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-deep">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What&apos;s eating your week? <span className="text-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="The tools you're running, the thing that keeps slipping, or just 'we're retyping everything twice'. Whatever's true."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={formStatus === "submitting"}
        className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formStatus === "submitting" ? "Sending..." : "Send it over"}
      </Button>

      {formStatus === "success" && (
        <div className="bg-deep/10 border border-deep/30 text-deep px-4 py-3 rounded-md text-sm font-medium">
          Got it. I read every message and I&apos;ll get back to you within a
          day.
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-band border border-rule text-ink-soft px-4 py-3 rounded-md text-sm font-medium">
          Something went wrong. Try again, or just email me at
          luke@mataitech.co.
        </div>
      )}
    </form>
  );
}
