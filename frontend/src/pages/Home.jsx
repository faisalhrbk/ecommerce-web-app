
import Hero from "../components/layout/Hero"
import GenderCollection from "../components/products/GenderCollection"
const Home = () => {
  return (
    <div>
        <Hero/>
        
        {/* gender collection for home page */}
        <GenderCollection/>
    </div>
  )
}

export default Home