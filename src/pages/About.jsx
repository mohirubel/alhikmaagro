import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Users, Target, Eye, Award, Globe } from 'lucide-react'

const About = () => {
  const milestones = [
    { year: '2010', event: 'Company Founded', description: 'Al Hikma Agro established with a vision to transform agriculture' },
    { year: '2015', event: 'International Expansion', description: 'Expanded operations to serve global markets' },
    { year: '2018', event: 'Organic Certification', description: 'Achieved organic certification for sustainable farming practices' },
    { year: '2020', event: 'Digital Transformation', description: 'Implemented advanced technology for supply chain management' },
    { year: '2023', event: 'Carbon Neutral', description: 'Achieved carbon neutral operations across all facilities' },
  ]

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'HACCP', description: 'Hazard Analysis Critical Control Points' },
    { name: 'Organic Certified', description: 'USDA Organic Certification' },
    { name: 'Fair Trade', description: 'Fair Trade Certified Products' },
    { name: 'Global GAP', description: 'Good Agricultural Practices' },
    { name: 'BRC Food Safety', description: 'British Retail Consortium Standard' },
  ]

const team = [
    {
      name: 'Ahmed Al-Hikma',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
      description: '20+ years experience in agricultural business and sustainable farming practices.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      description: 'Expert in supply chain management and international trade operations.',
    },
    {
      name: 'Dr. Michael Chen',
      position: 'Quality Assurance Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      description: 'PhD in Agricultural Sciences with focus on food safety and quality control.',
    },
    {
      name: 'Maria Rodriguez',
      position: 'Sustainability Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      description: 'Leading our environmental initiatives and sustainable farming programs.',
    },
  ]


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Al Hikma Agro</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Pioneering sustainable agriculture and connecting farmers to global markets 
            with premium quality products and innovative solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, Al Hikma Agro began as a small family business with a big vision: 
                to revolutionize the agricultural supply chain by connecting quality farmers with 
                global markets. Over the years, we have grown into a leading agricultural products 
                company, serving customers across six continents.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our expertise spans across grains, seeds, fruits, vegetables, and organic fertilizers. 
                We work directly with farmers to ensure sustainable farming practices while maintaining 
                the highest quality standards for our products.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-gray-600">Partner Farms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1M+</div>
                  <div className="text-gray-600">Tons Distributed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.prismic.io/innovx/5b2db074-a7c9-4ef2-8b7a-6daa78239c76_innovx-agriculuture.jpg?auto=compress,format&rect=157,0,4650,3100&w=3840&h=2560"
                alt="Al Hikma Agro Facilities"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To be the world's most trusted agricultural products company, leading the 
                transformation towards sustainable farming practices and ensuring food security 
                for future generations.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To provide premium quality agricultural products while supporting sustainable 
                farming practices, empowering farmers, and delivering exceptional value to our 
                customers worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth and development</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="p-6">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {milestone.year}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Quality Standards</h2>
            <p className="text-xl text-gray-600">
              Our commitment to quality is backed by international certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600">
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

