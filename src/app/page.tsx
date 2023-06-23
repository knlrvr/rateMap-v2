import Map from '@/components/map'
import Home from '@/components/home'
import Image from 'next/image'
import About from '@/components/about'
import Stats from '@/components/stats'
import AfspInfo from '@/components/afsp-info'


export default function Page() {
  return (
    <>
    <section id="home">
      <Home />
    </section>

    <section id ="about">
      <About />
    </section>

    <section id="map">
      <Map />
    </section>

    <section id="stats">
      <Stats />
    </section>

    <section id="afsp-info">
      <AfspInfo />
    </section>
    </>
  )
}
