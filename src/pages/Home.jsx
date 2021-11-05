import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Skills from '../components/Skills'
import Works from '../components/Works'

export default function Home() {
    return (
        <div>
            <Header />
            <Works />
            <About />
            <Skills />
            <Footer />
        </div>
    )
}
