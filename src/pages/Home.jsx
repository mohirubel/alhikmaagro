import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Leaf, Shield, Globe, Award } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: t('home.features.sustainable.title'),
      description: t('home.features.sustainable.desc')
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: t('home.features.quality.title'),
      description: t('home.features.quality.desc')
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: t('home.features.global.title'),
      description: t('home.features.global.desc')
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: t('home.features.leader.title'),
      description: t('home.features.leader.desc')
    }
  ]

  const products = t("featuredProducts", { returnObjects: true })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://news.ucsb.edu/sites/default/files/styles/large_2340x1212/public/2024-03/Pesticides-organic-iStock.jpg?itok=DjiG6lqG')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <Link to="/products">
                {t('home.hero.exploreBtn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-green-600 text-lg px-8 py-3">
              <Link to="/about">{t('home.hero.learnBtn')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.intro.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.intro.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('home.products.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('home.products.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products?.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    {t('home.products.viewDetails')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/products">
                {t('home.products.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
