import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Navbar'
import LandingPage from './landingPage'
import ContactForm from './contact'
import About from './about'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <About />
      <ContactForm/>
      <Footer/>
    </>
  )
}
