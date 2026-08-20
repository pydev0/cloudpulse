import Link from "next/link";
import { Zap, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Cloud & Infrastructure" },
  { href: "/services", label: "Software Development" },
  { href: "/services", label: "Managed IT Services" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Cloud<span className="text-gradient">Pulse</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Empowering businesses with cutting-edge IT solutions. Cloud
              infrastructure, custom software, and managed services.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-600" />
                <span>9toTHRIVE, Plot no. 28, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Phone className="h-4 w-4 shrink-0 text-gray-600" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Mail className="h-4 w-4 shrink-0 text-gray-600" />
                hr@cloudpulsetechnologies.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} CloudPulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
