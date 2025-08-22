import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { t } = useTranslation()

  const images = [
    'https://news.ucsb.edu/sites/default/files/styles/large_2340x1212/public/2024-03/Pesticides-organic-iStock.jpg?itok=DjiG6lqG',
    'https://naturespath.com/cdn/shop/articles/organic_farm_field-598622.jpg?v=1725927254',
    'https://d3bozysj9qkbnw.cloudfront.net/webuploads/UK-ForFarmers/News-and-Knowledge/_heroFull/351247/Organic-cows-grazing-header-2048-1024-px.webp'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) 

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1) // always slide to right
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-[66vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: direction > 0 ? '-100%' : '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
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
