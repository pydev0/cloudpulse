"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  index?: number;
}

export default function PortfolioCard({
  title,
  category,
  description,
  image,
  index = 0,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/[0.02]"
    >
      <div className="bg-surface rounded-2xl overflow-hidden h-full">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
