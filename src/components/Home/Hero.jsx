import { ArrowRight} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Hero() {
    const { t } = useTranslation()
  return (
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
  )
}
