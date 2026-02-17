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
          subject: "New Contact Form Submission from Matai Tech",
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
    "w-full px-4 py-3 bg-bg-paper border border-slate-200 text-text-primary rounded-card focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 placeholder:text-slate-400 font-sans text-sm";

  const labelClass =
    "block text-sm font-semibold text-slate-600 mb-2 tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent-warm">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent-warm">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@company.com"
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
          placeholder="Your Company Name"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your automation needs{" "}
          <span className="text-accent-warm">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Describe the tasks you'd like to automate or the challenges you're facing..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={formStatus === "submitting"}
        className="w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {formStatus === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {formStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-card text-sm font-medium">
          ✓ Thank you! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-card text-sm font-medium">
          Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  );
}
