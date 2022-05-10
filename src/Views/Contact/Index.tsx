import Contact from "../../components/Contact/Index";
import Navbar from "../../components/Nav/Index";
import Streams from "../../components/Streams/Index";
import Footer from "../../components/Footer/Index"
import Subscription from "../../components/Subscription/Index";
import Scroll from "../../components/Scroll/Index";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Streams />
      <Subscription />
      <Footer />
      <Scroll />
    </div>
  )
}
