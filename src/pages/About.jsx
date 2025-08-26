import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Award, Scale, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import CallInAction from "@/components/Common/CallInAction";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { t, i18n } = useTranslation();

  const milestones = [
    {
      year: "2010",
      event: t("about.milestones.founded.event"),
      description: t("about.milestones.founded.desc"),
    },
    {
      year: "2015",
      event: t("about.milestones.expansion.event"),
      description: t("about.milestones.expansion.desc"),
    },
    {
      year: "2018",
      event: t("about.milestones.certification.event"),
      description: t("about.milestones.certification.desc"),
    },
    {
      year: "2020",
      event: t("about.milestones.digital.event"),
      description: t("about.milestones.digital.desc"),
    },
    {
      year: "2023",
      event: t("about.milestones.carbon.event"),
      description: t("about.milestones.carbon.desc"),
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: t("about.cert.iso") },
    { name: "HACCP", description: t("about.cert.haccp") },
    { name: t("about.cert.organic"), description: t("about.cert.organicDesc") },
    {
      name: t("about.cert.fairtrade"),
      description: t("about.cert.fairtradeDesc"),
    },
    { name: "Global GAP", description: t("about.cert.globalgap") },
    { name: "BRC Food Safety", description: t("about.cert.brc") },
  ];

  const team = [
    {
      name: t("about.team.ceo.name"),
      position: t("about.team.ceo.position"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCf0rxKDdJgWsb7jnU1Who9RZz8zO_aEVksoLXum6L2fjJfoUoxp22Y60UvTjwmHDHug&usqp=CAU",
      description: t("about.team.ceo.desc"),
    },
    {
      name: t("about.team.ops.name"),
      position: t("about.team.ops.position"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCf0rxKDdJgWsb7jnU1Who9RZz8zO_aEVksoLXum6L2fjJfoUoxp22Y60UvTjwmHDHug&usqp=CAU",
      description: t("about.team.ops.desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("seo.about.title")}</title>
        <meta name="description" content={t("seo.about.description")} />
        <meta httpEquiv="Content-Language" content={i18n.language} />
      </Helmet>

      <CallInAction title={t("about.title")} subTitle={t("about.subtitle")} />

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("about.story.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("about.story.para1")}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t("about.story.para2")}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">{t("about.stats.farms")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">
                    {t("about.stats.countries")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1M+</div>
                  <div className="text-gray-600">{t("about.stats.tons")}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">{t("about.stats.years")}</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.prismic.io/innovx/5b2db074-a7c9-4ef2-8b7a-6daa78239c76_innovx-agriculuture.jpg?auto=compress,format&w=1280&h=720"
                alt="Al Hikma Agro Facilities"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold">{t("about.vision.title")}</h3>
            </div>
            <p className="text-lg text-gray-600">{t("about.vision.desc")}</p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold">{t("about.mission.title")}</h3>
            </div>
            <p className="text-lg text-gray-600">{t("about.mission.desc")}</p>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t("about.journey.title")}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t("about.journey.subtitle")}</p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`flex items-center mb-8 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <Card className="p-6">
                  <Badge className="bg-green-100 text-green-800">
                    {m.year}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{m.event}</h3>
                  <p className="text-gray-600">{m.description}</p>
                </Card>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t("about.cert.title")}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t("about.cert.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {certifications.map((c, i) => (
            <Card key={i} className="p-6 text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{c.name}</h3>
              <p className="text-gray-600">{c.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Code of Conduct */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
              {t("about.conduct.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t("about.conduct.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.conduct.integrity.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.conduct.integrity.desc")}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.conduct.sustainability.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.conduct.sustainability.desc")}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.conduct.community.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.conduct.community.desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Strategy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-2">
              {t("about.strategy.title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t("about.strategy.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.strategy.innovation.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.strategy.innovation.desc")}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.strategy.market.title")}
              </h3>
              <p className="text-gray-600">{t("about.strategy.market.desc")}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.strategy.collab.title")}
              </h3>
              <p className="text-gray-600">{t("about.strategy.collab.desc")}</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">
                {t("about.strategy.future.title")}
              </h3>
              <p className="text-gray-600">{t("about.strategy.future.desc")}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t("about.team.title")}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t("about.team.subtitle")}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-10 max-w-3xl mx-auto px-4">
          {team.map((member, i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold mb-1">
                  <a href={`tel:${member.name}`} className="hover:underline">
                    {member.name}
                  </a>
                </h3>
                <p className="text-green-600 mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
