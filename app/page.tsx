import Header from "@/components/header"
import Hero from "@/components/hero"
import Destinations from "@/components/destinations"
import CoreValues from "@/components/core-values"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import OurStory from "@/components/our-story"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Destinations />
        <CoreValues />
        <Services />
        <Testimonials />
        <OurStory />
      </main>
      <Footer />
    </div>
  )
}
