"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "02927c79-7bd3-4949-9540-863dc1e7a34c",
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
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Matai Tech
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition">Services</a>
              <a href="#integrations" className="text-gray-700 hover:text-primary-600 transition">Integrations</a>
              <a href="#case-studies" className="text-gray-700 hover:text-primary-600 transition">Case Studies</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            </div>
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Save Time & Money with
            <span className="block bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We help business owners automate tedious tasks, gain data visibility, and eliminate inefficiencies—so you can focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/luke-pauga-hlurq5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl"
            >
              Schedule a 30-Min Call
            </a>
            <a
              href="#services"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-primary-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About/Background Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Built by a Data Engineer Who's Seen the Problem Firsthand
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                As a data engineer working with operations-heavy industries, I've witnessed the same pattern repeatedly: <span className="font-semibold text-gray-900">far too much manual work and disconnected tools</span> costing businesses thousands in lost time and productivity.
              </p>
              <p>
                Companies struggle with data trapped in silos, teams manually transferring information between systems, and leaders lacking visibility into where inefficiencies lie. These aren't just minor inconveniences—they're <span className="font-semibold text-gray-900">massive drains on resources that directly impact your bottom line</span>.
              </p>
              <p className="text-primary-700 font-semibold bg-white p-4 rounded-lg border-l-4 border-primary-600">
                That's why I founded Matai Tech: to bring real-world data engineering expertise to businesses that need it most, creating custom automation solutions that actually solve operational problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tech consulting and automation solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Eliminate repetitive manual tasks with intelligent automation workflows. From data entry to report generation, we build solutions that work 24/7.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Workflow automation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Data synchronization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-accent-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Visibility & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Transform scattered data into actionable insights. Custom dashboards and reports that reveal where your business can improve.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom dashboards
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time reporting
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Performance metrics
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">System Integration</h3>
              <p className="text-gray-600 mb-4">
                Connect your existing tools and platforms. We build bridges between systems to create seamless, efficient workflows.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  API development
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Third-party connections
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Legacy system updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Software Integrations Section */}
      <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have extensive experience working with industry-leading platforms and tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Salesforce", logo: "/logos/salesforce.svg" },
              { name: "HubSpot", logo: "/logos/hubspot.jpeg" },
              { name: "Zapier", logo: "/logos/zapier.jpeg" },
              { name: "Monday.com", logo: "/logos/monday.com.svg" },
              { name: "Pipedrive", logo: "/logos/pipedrive.svg" },
              { name: "Google Sheets", logo: "/logos/google-sheets.png" },
              { name: "GoHighLevel", logo: "/logos/gohighlevel-2.png" },
              { name: "JobNimbus", logo: "/logos/jobnimbus.jpeg" },
              { name: "Housecall Pro", logo: "/logos/housecallpro.jpeg" },
              { name: "Acculynx", logo: "/logos/acculynx.jpeg" },
              { name: "Enerflo", logo: "/logos/enerflo.png" },
              { name: "Leap", logo: "/logos/leap.png" },
              { name: "Subcontractor Hub", logo: "/logos/subcontractor-hub.jpeg" },
            ].map((software) => (
              <div
                key={software.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center justify-center gap-3"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={software.logo}
                    alt={`${software.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-700 font-semibold text-center text-sm">{software.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Don't see your software? <a href="#contact" className="text-primary-600 font-semibold hover:underline">Contact us</a> - we integrate with hundreds of platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours transform their operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-primary-600 font-bold text-sm mb-2">E-COMMERCE</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                75% Reduction in Order Processing Time
              </h3>
              <p className="text-gray-600 mb-6">
                Automated order fulfillment workflows connecting Shopify, inventory management, and shipping providers. Eliminated manual data entry and reduced errors by 95%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Shopify</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">APIs</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Automation</span>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-accent-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-accent-600 font-bold text-sm mb-2">PROFESSIONAL SERVICES</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Dashboard Reveals $50K in Savings
              </h3>
              <p className="text-gray-600 mb-6">
                Built real-time analytics dashboard aggregating data from QuickBooks, project management, and CRM. Client identified inefficiencies saving thousands monthly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">QuickBooks</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Analytics</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Reporting</span>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-purple-600 font-bold text-sm mb-2">REAL ESTATE</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Automated Lead Management Increases Conversions 3x
              </h3>
              <p className="text-gray-600 mb-6">
                Integrated CRM with marketing automation and property databases. Automated follow-ups and personalized outreach tripled lead-to-client conversion rate.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">HubSpot</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">CRM</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Let's discuss how automation can save you time and money
            </p>
            <a
              href="https://cal.com/luke-pauga-hlurq5/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg mb-6"
            >
              Schedule a 30-Minute Call
            </a>
            <p className="text-primary-100 text-lg">or send us a message below</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition text-gray-900"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your automation needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition resize-none text-gray-900"
                  placeholder="Describe the tasks you'd like to automate or the challenges you're facing..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Matai Tech
              </h3>
              <p className="text-gray-400 mb-4">
                Professional tech consulting and automation solutions for modern businesses. Save time, reduce costs, and gain visibility into your operations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#integrations" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#case-studies" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:luke@mataitech.co" className="hover:text-white transition">
                    luke@mataitech.co
                  </a>
                </li>
                <li>
                  <a
                    href="https://cal.com/luke-pauga-hlurq5/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Schedule a call
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Matai Tech LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
