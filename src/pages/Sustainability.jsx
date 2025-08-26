import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Leaf, 
  Droplets, 
  Recycle, 
  Sun, 
  Shield, 
  Award, 
  CheckCircle, 
  Users,
  Globe
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CallInAction from '@/components/Common/CallInAction'
import { Helmet } from 'react-helmet-async'

const Sustainability = () => {
  const { t, i18n } = useTranslation()

  const practices = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: t("practices.organic.title"),
      description: t("practices.organic.desc"),
      impact: t("practices.organic.impact")
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: t("practices.water.title"),
      description: t("practices.water.desc"),
      impact: t("practices.water.impact")
    },
    {
      icon: <Recycle className="h-8 w-8 text-purple-600" />,
      title: t("practices.waste.title"),
      description: t("practices.waste.desc"),
      impact: t("practices.waste.impact")
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-600" />,
      title: t("practices.renewable.title"),
      description: t("practices.renewable.desc"),
      impact: t("practices.renewable.impact")
    }
  ]

  const qualityStandards = [
    {
      title: t("quality.soil.title"),
      description: t("quality.soil.desc"),
      status: t("quality.soil.status")
    },
    {
      title: t("quality.pest.title"),
      description: t("quality.pest.desc"),
      status: t("quality.pest.status")
    },
    {
      title: t("quality.crop.title"),
      description: t("quality.crop.desc"),
      status: t("quality.crop.status")
    },
    {
      title: t("quality.biodiversity.title"),
      description: t("quality.biodiversity.desc"),
      status: t("quality.biodiversity.status")
    }
  ]

  const certifications = [
    { name: "USDA Organic", icon: <Award className="h-6 w-6" />, color: 'bg-green-100 text-green-800' },
    { name: "Fair Trade", icon: <Users className="h-6 w-6" />, color: 'bg-blue-100 text-blue-800' },
    { name: "Rainforest Alliance", icon: <Leaf className="h-6 w-6" />, color: 'bg-emerald-100 text-emerald-800' },
    { name: "Carbon Neutral", icon: <Globe className="h-6 w-6" />, color: 'bg-gray-100 text-gray-800' },
    { name: "ISO 14001", icon: <Shield className="h-6 w-6" />, color: 'bg-purple-100 text-purple-800' },
    { name: "Global GAP", icon: <CheckCircle className="h-6 w-6" />, color: 'bg-orange-100 text-orange-800' }
  ]

  const sustainabilityGoals = [
    { goal: t("goals.carbon"), progress: 85, target: "2025" },
    { goal: t("goals.zeroWaste"), progress: 90, target: "2024" },
    { goal: t("goals.renewable"), progress: 75, target: "2025" },
    { goal: t("goals.water"), progress: 60, target: "2026" },
    { goal: t("goals.organic"), progress: 85, target: "2024" }
  ]

  const impactStats = [
    { number: '50,000', unit: t("impact.co2.unit"), description: t("impact.co2.desc") },
    { number: '500+', unit: t("impact.farmers.unit"), description: t("impact.farmers.desc") },
    { number: '30', unit: t("impact.acres.unit"), description: t("impact.acres.desc") },
    { number: '25%', unit: t("impact.water.unit"), description: t("impact.water.desc") }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('seo.sustainability.title')}</title>
        <meta name="description" content={t('seo.sustainability.description')} />
        <meta httpEquiv="Content-Language" content={i18n.language} />
      </Helmet>

      <CallInAction title={t("hero.title")} subTitle={t("hero.subtitle")}/>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("impact.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("impact.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.unit}
                  </div>
                  <div className="text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("practices.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("practices.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {practice.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">
                      {practice.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {practice.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      {t("practices.impactLabel")}: {practice.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("quality.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("quality.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {standard.title}
                    </h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {standard.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600">
                    {standard.description}
                  </p>
                  <div className="mt-4">
                    <CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />
                    <span className="text-sm text-green-600 font-medium">{t("quality.verified")}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("certifications.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("certifications.subtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${cert.color}`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {cert.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("goals.title")}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t("goals.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
            {sustainabilityGoals.map((goal, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {goal.goal}
                      </h3>
                      <p className="text-gray-600">{t("goals.target")}: {goal.target}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {goal.progress}%
                      </div>
                      <div className="text-sm text-gray-500">{t("goals.complete")}</div>
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sustainability
