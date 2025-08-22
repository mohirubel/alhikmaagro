import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import CallInAction from '@/components/Common/CallInAction'

const Blog = () => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Industry News',
    'Sustainability',
    'Product Updates',
    'Farming Tips',
    'Company News'
  ]

  const blogPosts = [
  {
    id: 1,
    title: t('blog.posts.1.title'),
    excerpt: t('blog.posts.1.excerpt'),
    category: t('categories.Sustainability'),
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: t('blog.posts.2.title'),
    excerpt: t('blog.posts.2.excerpt'),
    category: t('categories.Company News'),
    author: 'Ahmed Al-Hikma',
    date: '2024-01-10',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: t('blog.posts.3.title'),
    excerpt: t('blog.posts.3.excerpt'),
    category: t('categories.Farming Tips'),
    author: 'Michael Chen',
    date: '2024-01-08',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: t('blog.posts.4.title'),
    excerpt: t('blog.posts.4.excerpt'),
    category: t('categories.Industry News'),
    author: 'Maria Rodriguez',
    date: '2024-01-05',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 5,
    title: t('blog.posts.5.title'),
    excerpt: t('blog.posts.5.excerpt'),
    category: t('categories.Product Updates'),
    author: 'Dr. Sarah Johnson',
    date: '2024-01-03',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 6,
    title: t('blog.posts.6.title'),
    excerpt: t('blog.posts.6.excerpt'),
    category: t('categories.Sustainability'),
    author: 'Michael Chen',
    date: '2023-12-28',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=250&fit=crop',
    featured: false
  },
  {
    id: 7,
    title: t('blog.posts.7.title'),
    excerpt: t('blog.posts.7.excerpt'),
    category: t('categories.Company News'),
    author: 'Ahmed Al-Hikma',
    date: '2023-12-25',
    readTime: '3 min read',
    image: 'https://cdn.wikifarmer.com/images/detailed/2024/09/Common-Agricultural-Practices-From-Sowing-to-Harvest.jpg',
    featured: false
  },
  {
    id: 8,
    title: t('blog.posts.8.title'),
    excerpt: t('blog.posts.8.excerpt'),
    category: t('categories.Farming Tips'),
    author: 'Maria Rodriguez',
    date: '2023-12-20',
    readTime: '6 min read',
    image: 'https://www.sugar.org/wp-content/uploads/Canva-Farmer-in-sugar-beet-field-1-scaled.jpg',
    featured: false
  }
]


  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === t(`categories.${selectedCategory}`)
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen">
      <CallInAction title={t('blog.hero.title')} subTitle={t('blog.hero.subtitle')}/>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {t(`categories.${category}`)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('blog.featured.title')}</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-green-100 text-green-800">
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">{t('blog.featured.badge')}</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <Button className="bg-green-600 hover:bg-green-700">
                      {t('blog.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? t('blog.latestArticles') : t('blog.categoryArticles', { category: t(`categories.${selectedCategory}`) })}
            </h2>
            <div className="text-gray-600">
              {filteredPosts.length} {t('blog.articlesFound', { count: filteredPosts.length })}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.noArticles.title')}</h3>
              <p className="text-gray-600">{t('blog.noArticles.subtitle')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-100 text-green-800">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button variant="outline" size="sm" className="group-hover:bg-green-600 group-hover:text-white transition-colors">
                        {t('blog.readMore')}
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="hover:bg-green-600 hover:text-white">
                {t('blog.loadMore')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
