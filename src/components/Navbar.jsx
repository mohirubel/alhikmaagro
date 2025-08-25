import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
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
        <div className="flex justify-between h-14 md:h-36">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src='/alhikma-logo.png' alt='logo' className='h-12 md:h-32'/>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">
            {/* Phone Numbers (desktop only) */}
            <div className="hidden md:flex items-center justify-end space-x-6 mb-2">
              <a href="tel:+880123456789" className="flex items-center text-gray-700 hover:text-green-600">
                <Phone className="h-5 w-5 mr-2 text-green-600" />
                01837886250
              </a>
              <a href="tel:+880987654321" className="flex items-center text-gray-700 hover:text-green-600">
                <Phone className="h-5 w-5 mr-2 text-green-600" />
                01796445891
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Language Switch */}
              <div className="flex space-x-1">
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className="cursor-pointer"
                >
                  {t('lang.en')}
                </Button>
                <Button
                  variant={i18n.language === 'bn' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('bn')}
                  className="cursor-pointer"
                >
                  {t('lang.bn')}
                </Button>
              </div>
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
              {isOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
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
              <div className="flex space-x-1 mt-3">
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className="cursor-pointer"
                >
                  {t('lang.en')}
                </Button>
                <Button
                  variant={i18n.language === 'bn' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => changeLanguage('bn')}
                  className="cursor-pointer"
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
