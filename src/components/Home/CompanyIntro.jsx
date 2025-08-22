import React from "react";
import { useTranslation } from "react-i18next";
import { Leaf, Shield, Globe, Award } from 'lucide-react'

export default function CompanyIntro() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: t("home.features.sustainable.title"),
      description: t("home.features.sustainable.desc"),
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: t("home.features.quality.title"),
      description: t("home.features.quality.desc"),
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: t("home.features.global.title"),
      description: t("home.features.global.desc"),
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: t("home.features.leader.title"),
      description: t("home.features.leader.desc"),
    },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("home.intro.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("home.intro.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
