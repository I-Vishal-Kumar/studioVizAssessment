import React from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'
import HeroSection from './_components/HeroSection'
import TechSection from './_components/TechSection'
import WhyHireSection from './_components/WhyHireSection'
import HiringProcessSection from './_components/HiringProcessSection'
import HiringSection from './_components/HiringSection'
import UserGuideSection from './_components/UserGuideSection'
import AboutUs from './_components/AboutUs'

export default function Page() {
    return (
        <>
            <Header />
            <main className='min-h-screen'>
                <HeroSection />
                <HiringSection />
                <TechSection />
                <WhyHireSection />
                <HiringProcessSection />
                <UserGuideSection />
                <AboutUs />
            </main>
            <Footer />
        </>
    )
}
