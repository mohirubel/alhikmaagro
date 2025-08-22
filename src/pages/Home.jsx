import FeaturedProducts from '@/components/Home/FeaturedProducts'
import CompanyIntro from '@/components/Home/CompanyIntro'
import Hero from '@/components/Home/Hero'

const Home = () => { 
  return (
    <div className="min-h-screen">
      <Hero/>
      <CompanyIntro />
      <FeaturedProducts/>
    </div>
  )
}

export default Home
