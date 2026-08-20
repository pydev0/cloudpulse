import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";

const projects = [
  {
    title: "FinServ Cloud Migration",
    category: "Cloud",
    description:
      "Migrated a regional bank's infrastructure to AWS, reducing costs by 40% and improving uptime to 99.99%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "HealthTrack Patient Portal",
    category: "Software",
    description:
      "HIPAA-compliant patient portal serving 50,000+ users with real-time scheduling and telehealth.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
  {
    title: "RetailMax E-Commerce",
    category: "Software",
    description:
      "High-performance e-commerce platform handling 10,000+ daily transactions with sub-second loads.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "LogiFlow Supply Chain",
    category: "Data",
    description:
      "Real-time supply chain analytics that reduced logistics costs by 25% through predictive optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    title: "SecureNet SOC",
    category: "Security",
    description:
      "24/7 Security Operations Center for a financial services firm, achieving SOC 2 Type II compliance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    title: "EduPlatform LMS",
    category: "Software",
    description:
      "Scalable learning management system supporting 100,000+ concurrent students with live assessments.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
  },
];

export default function PortfolioPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Projects we're proud of"
          description="Real challenges. Real solutions. Real results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <PortfolioCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
