"use client";

import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02]"
    >
      <div className="relative bg-surface rounded-2xl p-8 h-full overflow-hidden">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-10">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center mb-6">
            <Icon className="h-5 w-5 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          {features && features.length > 0 && (
            <ul className="mt-6 space-y-2">
              {features.map((feature) => (
                <li key={feature} className="text-sm text-gray-500 flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-blue-400 rounded-full shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
