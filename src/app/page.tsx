"use client";

import Link from "next/link";
import { Cloud, Code, Monitor, ArrowRight, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud solutions on AWS, Azure, and GCP. We architect, migrate, and optimize your infrastructure for performance and cost efficiency.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom web and mobile applications built with modern technologies. From MVPs to enterprise platforms, we deliver quality software on time.",
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description:
      "24/7 monitoring, maintenance, and support for your entire IT environment. Focus on your business while we handle the technology.",
  },
];

const reasons = [
  "Industry-certified engineers and architects",
  "Agile methodology with transparent communication",
  "Proven track record across multiple industries",
  "24/7 support and dedicated account management",
  "Cost-effective solutions without compromising quality",
  "End-to-end project delivery and post-launch support",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-surface to-[#030712]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            label="Services"
            title="What we do"
            description="We provide comprehensive IT solutions tailored to your business needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading
                label="Why us"
                title="Built different"
                description="We combine deep technical expertise with a business-first mindset to deliver solutions that actually work."
                centered={false}
              />
              <ul className="space-y-4">
                {reasons.map((reason, i) => (
                  <FadeIn key={reason} delay={i * 0.05}>
                    <li className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>

            <FadeIn direction="right">
              <div className="animated-border p-8 relative z-10">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Let&apos;s build something great
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Whether you need to modernize your infrastructure, build a
                    custom application, or outsource your IT operations — we&apos;re ready.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-violet-600/10" />
        <div className="absolute inset-0 dot-grid" />
        <FadeIn>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Ready to <span className="text-gradient">transform</span> your IT?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Get a free consultation and discover how CloudPulse can help your
              business achieve its technology goals.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Schedule a Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
