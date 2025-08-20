import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Leaf, 
  Droplets, 
  Recycle, 
  Sun, 
  Shield, 
  Award, 
  CheckCircle, 
  TrendingUp,
  Users,
  Globe
} from 'lucide-react'

const Sustainability = () => {
  const practices = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Organic Farming',
      description: 'We partner with certified organic farms that use natural fertilizers and pest control methods, ensuring chemical-free products.',
      impact: '85% of our products are organically certified'
    },
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: 'Water Conservation',
      description: 'Advanced irrigation systems and water recycling programs help our partner farms reduce water consumption by up to 40%.',
      impact: '2.5 million gallons saved annually'
    },
    {
      icon: <Recycle className="h-8 w-8 text-purple-600" />,
      title: 'Waste Reduction',
      description: 'Comprehensive recycling programs and biodegradable packaging materials minimize our environmental footprint.',
      impact: '90% waste diversion from landfills'
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-600" />,
      title: 'Renewable Energy',
      description: 'Solar panels and wind energy power our facilities, reducing carbon emissions and promoting clean energy adoption.',
      impact: '100% renewable energy by 2025'
    }
  ]

  const qualityStandards = [
    {
      title: 'Soil Health Monitoring',
      description: 'Regular soil testing and nutrient management to maintain optimal growing conditions',
      status: 'Active'
    },
    {
      title: 'Integrated Pest Management',
      description: 'Natural pest control methods that protect crops while preserving beneficial insects',
      status: 'Certified'
    },
    {
      title: 'Crop Rotation Programs',
      description: 'Strategic crop rotation to maintain soil fertility and prevent disease',
      status: 'Implemented'
    },
    {
      title: 'Biodiversity Conservation',
      description: 'Protecting native species and promoting ecological balance in farming areas',
      status: 'Ongoing'
    }
  ]

  const certifications = [
    { name: 'USDA Organic', icon: <Award className="h-6 w-6" />, color: 'bg-green-100 text-green-800' },
    { name: 'Fair Trade', icon: <Users className="h-6 w-6" />, color: 'bg-blue-100 text-blue-800' },
    { name: 'Rainforest Alliance', icon: <Leaf className="h-6 w-6" />, color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Carbon Neutral', icon: <Globe className="h-6 w-6" />, color: 'bg-gray-100 text-gray-800' },
    { name: 'ISO 14001', icon: <Shield className="h-6 w-6" />, color: 'bg-purple-100 text-purple-800' },
    { name: 'Global GAP', icon: <CheckCircle className="h-6 w-6" />, color: 'bg-orange-100 text-orange-800' }
  ]

  const sustainabilityGoals = [
    { goal: 'Carbon Neutral Operations', progress: 85, target: '2025' },
    { goal: 'Zero Waste to Landfill', progress: 90, target: '2024' },
    { goal: 'Renewable Energy Usage', progress: 75, target: '2025' },
    { goal: 'Water Usage Reduction', progress: 60, target: '2026' },
    { goal: 'Organic Product Portfolio', progress: 85, target: '2024' }
  ]

  const impactStats = [
    { number: '50,000', unit: 'Tons CO₂', description: 'Reduced annually' },
    { number: '500+', unit: 'Farmers', description: 'Supported globally' },
    { number: '30', unit: 'Acres', description: 'Under sustainable practices' },
    { number: '25%', unit: 'Reduction', description: 'In water usage' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Sustainability & Quality</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our commitment to sustainable agriculture and environmental stewardship drives 
            everything we do, ensuring a better future for our planet and communities.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-gray-600">Measurable results from our sustainability initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.unit}
                  </div>
                  <div className="text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainable Farming Practices</h2>
            <p className="text-xl text-gray-600">
              How we're revolutionizing agriculture for a sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {practice.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">
                      {practice.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {practice.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-semibold">
                      Impact: {practice.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance Process</h2>
            <p className="text-xl text-gray-600">
              Rigorous standards ensuring the highest quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {standard.title}
                    </h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {standard.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600">
                    {standard.description}
                  </p>
                  <div className="mt-4">
                    <CheckCircle className="h-5 w-5 text-green-600 inline mr-2" />
                    <span className="text-sm text-green-600 font-medium">Verified & Monitored</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600">
              International certifications validating our commitment to quality and sustainability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${cert.color}`}>
                    {cert.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {cert.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2030 Sustainability Goals</h2>
            <p className="text-xl text-gray-600">
              Our roadmap to a more sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-6">
            {sustainabilityGoals.map((goal, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {goal.goal}
                      </h3>
                      <p className="text-gray-600">Target: {goal.target}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {goal.progress}%
                      </div>
                      <div className="text-sm text-gray-500">Complete</div>
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Sustainability Journey
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Partner with us to create a more sustainable and environmentally responsible agricultural future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Sustainability Report
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Partnerships
            </button>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Sustainability

