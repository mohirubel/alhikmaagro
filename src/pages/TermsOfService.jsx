
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t,i18n } = useTranslation();

  const sections = t("terms.sections", { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>{t("terms.title")}</title>
        <meta name="description" content={t("terms.meta")} />
        <meta httpEquiv="Content-Language" content={i18n.language} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8">{t("terms.heading")}</h1>

      <p className="text-lg mb-6">{sections.intro}</p>

      {Object.keys(sections).map((key) =>
        key === "intro" ? null : (
          <div key={key} className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {sections[key].title}
            </h2>
            <p className="text-gray-700">{sections[key].content}</p>
          </div>
        )
      )}
    </div>
  );
};

export default TermsOfService;
