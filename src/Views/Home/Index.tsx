import AboutUs from '../../components/AboutUs/Index'
import  Navbar  from '../../components/Nav/Index'
import Objective from '../../components/Objective/Index'
import Team from '../../components/Team/Index'
import Footer from '../../components/Footer/Index'
import "./styles"
import Scroll from '../../components/Scroll/Index'

export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Objective />
      <Team />
      <Footer />
      <Scroll />
    </div>
  )
}
