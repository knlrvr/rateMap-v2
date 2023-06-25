import Map from '@/components/map'
import Home from '@/components/home'
import Tag from '@/components/tag'
import About from '@/components/about'
import MapDesc from '@/components/mapDesc'
import AfspInfo from '@/components/afsp-info'


export default function Page() {
  return (
    <>
    <section id="home">
      <Home />
    </section>

    <section id ="tag">
      <Tag />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="map">
      <Map />
    </section>

    <section id="map-desc">
      <MapDesc />
    </section>

    <section id="learn">
      <AfspInfo />
    </section>
    </>
  )
}
