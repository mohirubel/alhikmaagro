import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  MessageCircle 
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const company = t("company", { returnObjects: true });
  const quickLinks = t("quickLinks", { returnObjects: true });
  const contact = t("contact", { returnObjects: true });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Leaf className="h-8 w-8 text-green-500" /> */}
              <img src="/alhikma-logo.png" alt="logo" className="h-8" />
              <span className="text-xl font-bold">Al Hikma Agro Ltd</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">{company.description}</p>
            <div className="flex space-x-4">
              <a
                href={company.social.facebook}
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={company.social.youtube}
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${company.social.whatsapp}`}
                className="text-gray-300 hover:text-green-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle  className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("quickLinksTitle", { defaultValue: "Quick Links" })}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("contactTitle", { defaultValue: "Contact Info" })}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <div className="flex gap-x-1">
                  <a
                    href="tel:01837886250"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    01837886250
                  </a>
                  <span>,</span>
                  <a
                    href="tel:01796445891"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    01796445891
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">{contact.email}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-500 mt-1" />
                <span className="text-gray-300 whitespace-pre-line">
                  {contact.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center border-t border-gray-800 mt-8 pt-8 text-center text-gray-300 space-x-1">
          <p>{t("footer.copyright")}</p>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:text-green-500">
            {t("footer.privacy")}
          </Link>
          <span>|</span>
          <Link to="/terms-of-service" className="hover:text-green-500">
            {t("footer.terms")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
