"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office",
    details: ["9toTHRIVE, Plot no. 28, Vittal Rao Nagar", "Madhapur, Hyderabad, Telangana 500081"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hr@cloudpulsetechnologies.com", "samp@cloudpulsetechnologies.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "24/7 Support Available"],
  },
];

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionHeading
              label="Contact"
              title="Get in touch"
              description="Have a project in mind? Fill out the form and we'll get back to you within 24 hours."
              centered={false}
            />
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <FadeIn direction="right">
              <div className="space-y-4 mt-2">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white">{item.title}</h3>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-sm text-gray-500">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
