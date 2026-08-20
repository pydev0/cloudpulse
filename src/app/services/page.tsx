"use client";

import Link from "next/link";
import { Cloud, Code, ArrowRight, Database, Shield, Server, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration & Strategy",
    description:
      "Seamlessly migrate your workloads to AWS, Azure, or GCP with minimal downtime.",
    features: [
      "Cloud readiness assessment",
      "Migration planning & execution",
      "Multi-cloud & hybrid architecture",
      "Cost optimization & FinOps",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description:
      "Automate your infrastructure provisioning with modern IaC tools.",
    features: [
      "Terraform & Pulumi automation",
      "CI/CD pipeline setup",
      "Container orchestration (K8s)",
      "Infrastructure monitoring",
    ],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Full-stack development of web and mobile applications using modern frameworks.",
    features: [
      "React, Next.js, Node.js",
      "Mobile apps (React Native, Flutter)",
      "API design & development",
      "Legacy system modernization",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Unlock insights from your data with modern data engineering and BI solutions.",
    features: [
      "Data pipeline architecture",
      "Data warehouse & lake setup",
      "BI dashboards & reporting",
      "ML/AI integration",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Protect your business with comprehensive security assessments and compliance.",
    features: [
      "Security audits & pen testing",
      "Compliance (SOC 2, HIPAA, GDPR)",
      "Identity & access management",
      "Security monitoring & SIEM",
    ],
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    description:
      "24/7 monitoring and support for your IT environment. Focus on growth.",
    features: [
      "24/7 helpdesk & NOC",
      "Proactive monitoring & alerting",
      "Patch management & updates",
      "Disaster recovery planning",
    ],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We assess your environment and identify opportunities." },
  { step: "02", title: "Strategy", description: "We design a solution roadmap aligned with your goals." },
  { step: "03", title: "Build", description: "Our engineers build and deploy using agile sprints." },
  { step: "04", title: "Support", description: "Ongoing monitoring, optimization, and support." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Services Grid */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="Everything you need to scale"
            description="Each service is delivered by certified professionals with deep domain expertise."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-surface to-[#030712]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            label="Process"
            title="How we work"
            description="A proven four-step process for successful outcomes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="text-5xl font-bold text-gradient opacity-40 mb-4">{item.step}</div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-violet-600/10" />
        <div className="absolute inset-0 dot-grid" />
        <FadeIn>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Not sure what you need?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Talk to one of our solution architects for a free assessment. We&apos;ll
              recommend the right services for your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
