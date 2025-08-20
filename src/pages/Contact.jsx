import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: 'Phone',
      details: ['+880 1716 592102', '+61 402 647 138'],
      description: 'Mon-Fri 8:00 AM - 6:00 PM'
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: 'Email',
      details: ['info@alhikmaagro.com', 'sales@alhikmaagro.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: 'Address',
      details: ['Hasan Villa', 'Muktijodda Road, Uttara', 'Dhaka, Bangladesh'],
      description: 'Visit our headquarters'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-green-600" />,
      title: 'WhatsApp Business',
      details: ['+880 1716 592102'],
      description: 'Quick support and inquiries'
    }
  ]

  const offices = [
    {
      name: 'Headquarters - USA',
      address: '123 Agricultural District, Green Valley, State 12345',
      phone: '+1 (555) 123-4567',
      email: 'usa@alhikmaagro.com'
    },
    {
      name: 'European Office - Netherlands',
      address: 'Agro Business Park 45, 2685 DB Den Haag',
      phone: '+31 70 123 4567',
      email: 'europe@alhikmaagro.com'
    },
    {
      name: 'Asian Office - Singapore',
      address: '1 Marina Bay, Singapore 018989',
      phone: '+65 6123 4567',
      email: 'asia@alhikmaagro.com'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Get in touch with our team for partnerships, inquiries, or support. 
            We're here to help you with all your agricultural product needs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mt-3">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className='mb-2'>Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="mb-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className='mb-2'>Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className='mb-2'>Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className='mb-2'>Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className='mb-2'>Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className='mb-2'>Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 mb-3">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card>
              <CardContent className="p-0">
                <div className="h-64 w-full rounded-lg overflow-hidden">
                  <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.567432779364!2d90.41251891543268!3d23.810331384555846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abf3dbb8c3%3A0xa563f0db14e63bf3!2sGreen%20Valley!5e0!3m2!1sen!2sbd!4v1692567890123!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>


              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center mt-3">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-xl text-gray-600">
              We have offices worldwide to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {office.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        {office.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <p className="text-gray-600 text-sm">
                        {office.phone}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-green-600" />
                      <p className="text-gray-600 text-sm">
                        {office.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

