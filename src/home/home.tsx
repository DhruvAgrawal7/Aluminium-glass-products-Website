import About from "../component/About/about"
import Works from "../component/Works/ourWorks"
import Contact from "../component/contact/contact"
import Footer from "../component/footer/footer"
import Founder from "../component/founder/founder"
import Head from "../component/header/header"
import Landing from "../component/landing/landing"
import Product from "../component/products/products"
import './home.css'
const Home = () => {
    return (
        <div id = "home">
            <Head />
            <Landing/>
            <About />
            <Product />
            <Works/>
            <Contact/>
            <Founder/>
            <Footer/>
        </div>
    )
}

export default Home;