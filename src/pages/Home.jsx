import FeaturedProducts from '@/components/Home/FeaturedProducts'
import CompanyIntro from '@/components/Home/CompanyIntro'
import Hero from '@/components/Home/Hero'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation() 

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta name="keywords" content={t('seo.home.keywords')} />
        <meta httpEquiv="Content-Language" content={i18n.language} />
      </Helmet>

      <Hero/>
      <CompanyIntro />
      <FeaturedProducts/>
    </div>
  )
}

export default Home
