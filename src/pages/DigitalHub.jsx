import { Card } from "@/components/ui/card";
import {
  Globe, Smartphone, BarChart3, Users, Cloud,
  Sprout, Tractor, Wifi, BookOpen, ShieldCheck,
  Facebook, Youtube, Instagram, Linkedin, Twitter, MessageCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";

const DigitalHub = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <Globe className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.marketplace.title"), desc: t("digitalHub.features.marketplace.desc") },
    { icon: <Smartphone className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.mobile.title"), desc: t("digitalHub.features.mobile.desc") },
    { icon: <BarChart3 className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.analytics.title"), desc: t("digitalHub.features.analytics.desc") },
    { icon: <Users className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.community.title"), desc: t("digitalHub.features.community.desc") },
    { icon: <Cloud className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.training.title"), desc: t("digitalHub.features.training.desc") },
    { icon: <Sprout className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.organic.title"), desc: t("digitalHub.features.organic.desc") },
    { icon: <Tractor className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.smartFarming.title"), desc: t("digitalHub.features.smartFarming.desc") },
    { icon: <Wifi className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.iot.title"), desc: t("digitalHub.features.iot.desc") },
    { icon: <BookOpen className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.knowledge.title"), desc: t("digitalHub.features.knowledge.desc") },
    { icon: <ShieldCheck className="h-10 w-10 text-green-600" />, title: t("digitalHub.features.certification.title"), desc: t("digitalHub.features.certification.desc") }
  ];

 const socials = [
  { 
    icon: <Facebook className="h-8 w-8 text-blue-600" />, 
    title: t("digitalHub.socials.facebook.title"), 
    desc: t("digitalHub.socials.facebook.desc"), 
    link: "https://www.facebook.com/p/Al-Hikma-Agro-61575531547813/"
  },
  { 
    icon: <Youtube className="h-8 w-8 text-red-600" />, 
    title: t("digitalHub.socials.youtube.title"), 
    desc: t("digitalHub.socials.youtube.desc"), 
    link: "https://www.youtube.com/@AL-HIKMAAGROLIMITED"
  },
  { 
    icon: <MessageCircle className="h-8 w-8 text-green-600" />, 
    title: t("digitalHub.socials.whatsapp.title"), 
    desc: t("digitalHub.socials.whatsapp.desc"), 
    link: "https://wa.me/+8801837886250"
  },
  { 
    icon: <Instagram className="h-8 w-8 text-pink-500" />, 
    title: t("digitalHub.socials.instagram.title"), 
    desc: t("digitalHub.socials.instagram.desc"), 
    link: "https://instagram.com"
  },
  { 
    icon: <Linkedin className="h-8 w-8 text-blue-700" />, 
    title: t("digitalHub.socials.linkedin.title"), 
    desc: t("digitalHub.socials.linkedin.desc"), 
    link: "https://linkedin.com"
  },
  { 
    icon: <Twitter className="h-8 w-8 text-sky-500" />, 
    title: t("digitalHub.socials.twitter.title"), 
    desc: t("digitalHub.socials.twitter.desc"), 
    link: "https://twitter.com"
  }
];


  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 text-center">
        {t("digitalHub.title")}
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        {t("digitalHub.subtitle")}
      </p>

      {/* Features */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((item, idx) => (
          <Card key={idx} className="p-6 shadow-md hover:shadow-lg transition">
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </Card>
        ))}
      </div> */}

      {/* Social Media */}
      {/* <h2 className="text-2xl font-bold text-center mb-6">
        {t("digitalHub.connectTitle", "Connect With Us")}
      </h2> */}
      <div className="grid md:grid-cols-3 gap-6">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="p-6 text-center shadow-md hover:shadow-lg transition hover:bg-gray-50">
              <div className="flex justify-center mb-2">{social.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{social.title}</h3>
              <p className="text-gray-600 text-sm">{social.desc}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DigitalHub;
