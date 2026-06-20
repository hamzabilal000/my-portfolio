import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function HomePage() {
    useEffect(() => {
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        let sections = document.querySelectorAll('.reveal')
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <div className="reveal"><Hero /></div>
            <div className="reveal"><About /></div>
            <div className="reveal"><Skills /></div>
            <div className="reveal"><Projects /></div>
            <div className="reveal"><Contact /></div>
            <Footer />
        </div>
    )
}

export default HomePage
