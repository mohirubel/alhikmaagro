import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Leaf, Shield, Globe, Award } from 'lucide-react'

const Home = () => {
  const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wheat',
    category: 'Grains',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop',
    description: 'High-quality wheat grains perfect for flour production',
  },
  {
    id: 2,
    name: 'Organic Rice',
    category: 'Grains',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop',
    description: 'Certified organic rice with superior taste and nutrition',
  },
  {
    id: 3,
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    image: 'https://cdn.mos.cms.futurecdn.net/6ct8VbpM7PtB2JdiqCMicQ.jpg',
    description: 'Farm-fresh tomatoes packed with flavor and nutrients',
  },
  {
    id: 4,
    name: 'Corn Seeds',
    category: 'Seeds',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=300&h=200&fit=crop',
    description: 'High-yield corn seeds for optimal crop production',
  },
  {
    id: 5,
    name: 'Organic Apples',
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop',
    description: 'Crisp, sweet organic apples grown with care',
  },
  {
    id: 6,
    name: 'Bio Fertilizer',
    category: 'Fertilizers',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
    description: 'Eco-friendly fertilizer for sustainable farming',
  },
]

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Sustainable Farming',
      description: 'Committed to eco-friendly agricultural practices',
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Quality Assured',
      description: 'Rigorous quality control and certification processes',
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: 'Global Reach',
      description: 'Serving customers worldwide with reliable supply chains',
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Industry Leader',
      description: 'Recognized excellence in agricultural product distribution',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative h-screen flex items-center justify-center">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('https://news.ucsb.edu/sites/default/files/styles/large_2340x1212/public/2024-03/Pesticides-organic-iStock.jpg?itok=DjiG6lqG')" }}
  ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>
  {/* Content */}
  <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Premium Agricultural Products
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      Connecting farms to markets with quality grains, seeds, fruits, and vegetables. 
      Your trusted partner in sustainable agriculture.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
        <Link to="/products">
          Explore Our Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="text-black border-white hover:bg-white hover:text-green-600 text-lg px-8 py-3">
        <Link to="/about">Learn More</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Al Hikma Agro is a leading agricultural products company dedicated to providing 
              premium quality grains, seeds, fruits, and vegetables to customers worldwide. 
              With years of experience and a commitment to sustainable farming practices, 
              we bridge the gap between farmers and global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">
              Discover our premium selection of agricultural products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who trust Al Hikma Agro for their agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-green-600 border-white hover:bg-white hover:text-black text-lg px-8 py-3">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

