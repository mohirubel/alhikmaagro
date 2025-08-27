import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import CallInAction from "@/components/Common/CallInAction";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contactPage.thankYou"));
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });

    //   emailjs
    // .send(
    //   "service_iqu06w1",     // replace with actual service ID
    //   "template_uyv6vpe",    // replace with actual template ID
    //   formData,              // must match template variables
    //   "Zz0xY4C2thC0Jq1Jn"      // replace with actual public key
    // )
    // .then(
    //   (result) => {
    //     console.log("Email sent:", result.text);
    //     alert(t("contactPage.thankYou"));
    //     setFormData({
    //       name: "",
    //       email: "",
    //       company: "",
    //       phone: "",
    //       subject: "",
    //       message: "",
    //     });
    //   },
    //   (error) => {
    //     console.error("Email error:", error.text);
    //     alert("Something went wrong. Please try again.");
    //   }
    // );
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: t("contactPage.phone"),
      details: ["01837886250", "01796445891"],
      description: t("contactPage.phoneDesc"),
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: t("contactPage.email"),
      details: ["info@alhikmaagro.com", "sales@alhikmaagro.com"],
      description: t("contactPage.emailDesc"),
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: t("contactPage.address"),
      details: t("contactPage.addressDetails", { returnObjects: true }),
      description: t("contactPage.addressDesc"),
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      title: t("contactPage.whatsapp"),
      details: ["+8801837886250", "+8801796445891"],
      description: t("contactPage.whatsappDesc"),
    },
  ];

  const offices = [
    {
      name: t("contactPage.hq"),
      address: t("contactPage.hqAddress"),
      phone: "+1 (555) 123-4567",
      email: "usa@alhikmaagro.com",
    },
    {
      name: t("contactPage.europe"),
      address: t("contactPage.europeAddress"),
      phone: "+31 70 123 4567",
      email: "europe@alhikmaagro.com",
    },
    {
      name: t("contactPage.asia"),
      address: t("contactPage.asiaAddress"),
      phone: "+65 6123 4567",
      email: "asia@alhikmaagro.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("seo.contact.title")}</title>
        <meta name="description" content={t("seo.contact.description")} />
        <meta httpEquiv="Content-Language" content={i18n.language} />
      </Helmet>
      <CallInAction
        title={t("contactPage.heroTitle")}
        subTitle={t("contactPage.heroSubtitle")}
      />

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mt-3">
                    {t("contactPage.formTitle")}
                  </CardTitle>
                  <p className="text-gray-600">
                    {t("contactPage.formSubtitle")}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="mb-2">
                          {t("contactPage.fullName")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t("contactPage.placeholderFullName")}
                          className="mb-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2">
                          {t("contactPage.emailAddress")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t("contactPage.placeholderEmail")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="mb-2">
                          {t("contactPage.company")}
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder={t("contactPage.placeholderCompany")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="mb-2">
                          {t("contactPage.phoneNumber")}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t("contactPage.placeholderPhone")}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="mb-2">
                        {t("contactPage.subject")}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t("contactPage.placeholderSubject")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="mb-2">
                        {t("contactPage.message")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t("contactPage.placeholderMessage")}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 mb-3 cursor-pointer"
                    >
                      {t("contactPage.sendMessage")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("contactPage.getInTouch")}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => {
                          if (info.title === t("contactPage.phone")) {
                            // 📞 Phone link
                            return (
                              <a
                                key={idx}
                                href={`tel:${detail}`}
                                className="block text-gray-600 hover:text-green-600 transition-colors"
                              >
                                {detail}
                              </a>
                            );
                          } else if (info.title === t("contactPage.whatsapp")) {
                            // 💬 WhatsApp link
                            const waNumber = detail.replace(/\D/g, ""); // keep only digits
                            return (
                              <a
                                key={idx}
                                href={`https://wa.me/${waNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-600 hover:text-green-600 transition-colors"
                              >
                                {detail}
                              </a>
                            );
                          } else if (info.title === t("contactPage.email")) {
                            // 📧 Email link
                            return (
                              <a
                                key={idx}
                                href={`mailto:${detail}`}
                                className="block text-gray-600 hover:text-green-600 transition-colors"
                              >
                                {detail}
                              </a>
                            );
                          } else {
                            // 🏠 Address or others
                            return (
                              <p key={idx} className="text-gray-600">
                                {detail}
                              </p>
                            );
                          }
                        })}

                        <p className="text-sm text-gray-500 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 w-full rounded-lg overflow-hidden">
                    <iframe
                      title="Company Location"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29436.8898761467!2d91.15870564237052!3d22.742686911600515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a90005075085%3A0x21b4439de81a943c!2sAl-Hikma%20Agro%20Limited!5e0!3m2!1sen!2sbd!4v1756109357847!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center mt-3">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    {t("contactPage.businessHours")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {t("contactPage.mondayFriday")}
                      </span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {t("contactPage.saturday")}
                      </span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        {t("contactPage.sunday")}
                      </span>
                      <span className="font-medium">
                        {t("contactPage.closed")}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("contactPage.globalOffices")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("contactPage.globalOfficesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {office.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-green-600" />
                      <p className="text-gray-600 text-sm">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
