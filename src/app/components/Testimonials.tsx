import React from "react";
import { Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Yoga Instructor",
      text: "The grip on the cork mat is incredible. I've never felt so stable in my practice, even during hot yoga sessions.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Meditation Practitioner",
      text: "I love the aesthetic of these products. They bring a sense of calm to my home studio before I even start moving.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Wellness Blogger",
      text: "Finally, a brand that cares about sustainability without compromising on quality. The customer service is also top-notch!",
      rating: 4,
    }
  ];

  return (
    <section className="bg-[#EAE4D9]/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#2C3333] mb-4">Community Stories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Join thousands of mindful practitioners who have found their center with ZenSoul.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-[#D97C66] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-current" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-[#2C3333] italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-[#2C3333]">{t.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
