import FadeIn from "./FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeIn className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gradient mb-4">
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : "text-white"}`}>
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 mt-5 leading-relaxed text-lg">{description}</p>
      )}
    </FadeIn>
  );
}
