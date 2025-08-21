import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.sustainability'), path: '/sustainability' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("lang", lng); 
  }

    useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);


  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">{t('brand')}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switch */}
            <div className="flex space-x-2">
              <Button
                variant={i18n.language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => changeLanguage('en')}
              >
                {t('lang.en')}
              </Button>
              <Button
                variant={i18n.language === 'bn' ? 'default' : 'outline'}
                size="sm"
                onClick={() => changeLanguage('bn')}
              >
                {t('lang.bn')}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Switch */}
              <div className="flex space-x-2 mt-3">
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                >
                  {t('lang.en')}
                </Button>
                <Button
                  variant={i18n.language === 'bn' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('bn')}
                >
                  {t('lang.bn')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
