"use client";

import { Target, Eye, Heart, Users, Briefcase, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

const stats = [
  { icon: Clock, value: "5+", label: "Years" },
  { icon: Users, value: "50+", label: "Clients" },
  { icon: Briefcase, value: "20+", label: "Companies" },
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We stay at the forefront of technology, continuously exploring new tools and methodologies.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open communication and honest reporting. No surprises, just results.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is our success. We tailor solutions to your business goals.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team, building partnerships on trust.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Story */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Story"
            title="From startup to trusted IT partner"
            description="What started as a small team of passionate engineers has grown into a full-service IT solutions provider trusted by 50+ businesses."
          />
          <div className="max-w-3xl mx-auto space-y-5 text-gray-400 leading-relaxed text-lg text-center">
            <FadeIn>
              <p>
                Founded in Manchester, UK in 2021, CloudPulse began by helping
                startups migrate to the cloud. As our expertise grew, so did
                our client base and service offerings.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>
                Today, we serve businesses across healthcare, finance,
                retail, and technology sectors, providing end-to-end IT
                solutions that drive measurable business outcomes.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Our growing team of certified professionals brings deep domain
                expertise and a relentless focus on quality to every project.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <stat.icon className="h-5 w-5 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-surface to-[#030712]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <SectionHeading
            label="Purpose"
            title="Mission & Vision"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FadeIn>
              <div className="p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02] h-full">
                <div className="bg-surface rounded-2xl p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                    <Target className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To empower businesses with reliable, scalable, and innovative
                    technology solutions that accelerate growth and create
                    competitive advantage.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02] h-full">
                <div className="bg-surface rounded-2xl p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                    <Eye className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Vision</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To be the most trusted IT partner for growing businesses,
                    known for technical excellence and commitment to client success.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Values"
            title="What drives us"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02]"
              >
                <div className="bg-surface rounded-2xl p-7 text-center h-full relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <value.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
