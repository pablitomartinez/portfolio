import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './Navbar'
import LandingPage from './landingPage'
import ContactForm from './contact'
import About from './about'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <LandingPage/>
      <About />
      <ContactForm/>
    </main>
  )
}
