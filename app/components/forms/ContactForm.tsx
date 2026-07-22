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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "02927c79-7bd3-4949-9540-863dc1e7a34c",
          subject: "New contact form submission from mataitech.co",
          from_name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
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
    "w-full px-4 py-3 bg-bg border border-bg-border text-cream rounded-md focus:border-ember focus:ring-1 focus:ring-ember/30 outline-none transition-all duration-200 placeholder:text-ink-muted text-sm";

  const labelClass = "block text-sm font-medium text-ink-soft mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-ember-bright">*</span>
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
            Email <span className="text-ember-bright">*</span>
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
          What&apos;s eating your week? <span className="text-ember-bright">*</span>
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
        <div className="bg-ember/10 border border-ember/30 text-ember-bright px-4 py-3 rounded-md text-sm font-medium">
          Got it. I read every message and I&apos;ll get back to you within a
          day.
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-ink/5 border border-bg-border text-ink-soft px-4 py-3 rounded-md text-sm font-medium">
          Something went wrong. Try again, or just email me at
          luke@mataitech.co.
        </div>
      )}
    </form>
  );
}
