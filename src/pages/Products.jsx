import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Star, 
  Leaf, 
  Award,
  ShoppingCart,
  Eye
} from 'lucide-react'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['All', 'Grains', 'Seeds', 'Fruits', 'Vegetables', 'Fertilizers', 'Organic Products']

  const products = [
    {
      id: 1,
      name: 'Premium Wheat',
      category: 'Grains',
      description: 'High-quality wheat grains perfect for flour production. Grown using sustainable farming practices.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
      price: '$45/ton',
      rating: 4.8,
      organic: true,
      featured: true,
      inStock: true,
      origin: 'USA',
      purchaseUrl: 'https://amazon.com/product1'
    },
    {
      id: 2,
      name: 'Organic Rice',
      category: 'Grains',
      description: 'Certified organic rice with superior taste and nutrition. Perfect for health-conscious consumers.',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=300&h=200&fit=crop',
      price: '$52/ton',
      rating: 4.9,
      organic: true,
      featured: false,
      inStock: true,
      origin: 'Thailand',
      purchaseUrl: 'https://alibaba.com/product2'
    },
    {
      id: 3,
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      description: 'Farm-fresh tomatoes packed with flavor and nutrients. Ideal for restaurants and food processing.',
      image: 'https://cdn.mos.cms.futurecdn.net/6ct8VbpM7PtB2JdiqCMicQ.jpg',
      price: '$8/kg',
      rating: 4.7,
      organic: false,
      featured: true,
      inStock: true,
      origin: 'Mexico',
      purchaseUrl: 'https://amazon.com/product3'
    },
    {
      id: 4,
      name: 'Corn Seeds',
      category: 'Seeds',
      description: 'High-yield corn seeds for optimal crop production. Disease-resistant and climate-adapted varieties.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=200&fit=crop',
      price: '$120/bag',
      rating: 4.6,
      organic: false,
      featured: false,
      inStock: true,
      origin: 'USA',
      purchaseUrl: 'https://alibaba.com/product4'
    },
    {
      id: 5,
      name: 'Organic Apples',
      category: 'Fruits',
      description: 'Crisp, sweet organic apples grown with care. Perfect for fresh consumption and processing.',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
      price: '$12/kg',
      rating: 4.8,
      organic: true,
      featured: false,
      inStock: true,
      origin: 'New Zealand',
      purchaseUrl: 'https://amazon.com/product5'
    },
    {
      id: 6,
      name: 'Bio Fertilizer',
      category: 'Fertilizers',
      description: 'Eco-friendly fertilizer for sustainable farming. Improves soil health and crop yields naturally.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
      price: '$35/bag',
      rating: 4.5,
      organic: true,
      featured: true,
      inStock: true,
      origin: 'Germany',
      purchaseUrl: 'https://alibaba.com/product6'
    },
    {
      id: 7,
      name: 'Basmati Rice',
      category: 'Grains',
      description: 'Premium basmati rice with distinctive aroma and long grains. Perfect for gourmet cooking.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
      price: '$65/ton',
      rating: 4.9,
      organic: false,
      featured: false,
      inStock: true,
      origin: 'India',
      purchaseUrl: 'https://amazon.com/product7'
    },
    {
      id: 8,
      name: 'Organic Carrots',
      category: 'Vegetables',
      description: 'Fresh organic carrots rich in beta-carotene. Grown without synthetic pesticides or fertilizers.',
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=300&h=200&fit=crop',
      price: '$6/kg',
      rating: 4.6,
      organic: true,
      featured: false,
      inStock: true,
      origin: 'Canada',
      purchaseUrl: 'https://alibaba.com/product8'
    },
    {
      id: 9,
      name: 'Sunflower Seeds',
      category: 'Seeds',
      description: 'High-quality sunflower seeds for oil production. Excellent germination rate and oil content.',
      image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=300&h=200&fit=crop',
      price: '$85/bag',
      rating: 4.7,
      organic: false,
      featured: false,
      inStock: false,
      origin: 'Ukraine',
      purchaseUrl: 'https://amazon.com/product9'
    },
    {
      id: 10,
      name: 'Organic Bananas',
      category: 'Fruits',
      description: 'Sweet, ripe organic bananas. Sustainably grown and fair-trade certified.',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
      price: '$4/kg',
      rating: 4.8,
      organic: true,
      featured: false,
      inStock: true,
      origin: 'Ecuador',
      purchaseUrl: 'https://alibaba.com/product10'
    },
    {
      id: 11,
      name: 'Organic Compost',
      category: 'Fertilizers',
      description: 'Premium organic compost made from natural materials. Enhances soil structure and fertility.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop&crop=entropy',
      price: '$25/bag',
      rating: 4.4,
      organic: true,
      featured: false,
      inStock: true,
      origin: 'USA',
      purchaseUrl: 'https://amazon.com/product11'
    },
    {
      id: 12,
      name: 'Bell Peppers',
      category: 'Vegetables',
      description: 'Colorful bell peppers with excellent flavor and nutritional value. Available in multiple colors.',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=200&fit=crop',
      price: '$10/kg',
      rating: 4.5,
      organic: false,
      featured: false,
      inStock: true,
      origin: 'Netherlands',
      purchaseUrl: 'https://alibaba.com/product12'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'rating':
        return b.rating - a.rating
      case 'price':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''))
      default:
        return 0
    }
  })

  const featuredProducts = products.filter(product => product.featured)

  const handlePurchase = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our comprehensive range of premium agricultural products, 
            from grains and seeds to fresh fruits and vegetables.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our top-rated and most popular products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-2 border-green-200">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-600 text-white">Featured</Badge>
                    {product.organic && (
                      <Badge className="bg-emerald-100 text-emerald-800">
                        <Leaf className="h-3 w-3 mr-1" />
                        Organic
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{product.category}</Badge>
                    <span className="text-sm text-gray-500">Origin: {product.origin}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={() => handlePurchase(product.purchaseUrl)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Purchase
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
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
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : `${selectedCategory}`}
            </h2>
            <div className="text-gray-600">
              {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      {product.organic && (
                        <Badge className="bg-emerald-100 text-emerald-800 text-xs">
                          <Leaf className="h-3 w-3 mr-1" />
                          Organic
                        </Badge>
                      )}
                      {/* {!product.inStock && (
                        <Badge variant="destructive" className="text-xs">
                          Out of Stock
                        </Badge>
                      )} */}
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className="bg-white rounded-full p-1 shadow-lg">
                        <div className="flex items-center text-xs">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      {/* <span className="text-lg font-bold text-green-600">{product.price}</span> */}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">Origin: {product.origin}</span>
                      {product.featured && (
                        <Award className="h-4 w-4 text-yellow-500" />
                      )}
                    </div> */}
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-green-600 hover:bg-green-700 text-xs"
                        onClick={() => handlePurchase(product.purchaseUrl)}
                        // disabled={!product.inStock}
                      >
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            View More
                            <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                      {/* <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {sortedProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="hover:bg-green-600 hover:text-white">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {/*<section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact our team for bulk orders, custom packaging, or specialized agricultural products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Request Quote
            </Button>
            <Button variant="outline" size="lg" className="text-green-600 border-white hover:bg-white hover:text-black">
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Products

