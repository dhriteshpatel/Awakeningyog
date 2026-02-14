import React from "react";
import { Leaf, Award, Heart, ShieldCheck } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-[#4A5D54]" />,
      title: "Eco-Friendly",
      description: "Made from 100% natural rubber and cork."
    },
    {
      icon: <Award className="h-8 w-8 text-[#4A5D54]" />,
      title: "Premium Quality",
      description: "Durable materials designed to last a lifetime."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#4A5D54]" />,
      title: "Community First",
      description: "1% of every sale goes to mental health charities."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#4A5D54]" />,
      title: "Non-Toxic",
      description: "Free from PVC, silicones, and phthalates."
    }
  ];

  return (
    <div className="bg-[#F9F7F2] py-16 border-b border-[#EAE4D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#EAE4D9]/50 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2C3333] mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
