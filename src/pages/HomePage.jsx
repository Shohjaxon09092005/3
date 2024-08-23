import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import GroopCard from '../components/GroopCard'
import rasm1 from '../images/groop1.svg'
import rasm2 from '../images/groop2.svg'
import rasm3 from '../images/groop3.png'
import GroopCardRew from '../components/GroopCardRew'
function HomePage() {
  return (
    <main>
      <Hero />
      <Banner />
      <GroopCard title="Easy to use
riding telemetry" desc="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app." btn_text="Learn More" img={rasm1} />
      <GroopCardRew title="Coming to a city near you" desc="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year." btn_text="Learn More" img={rasm2} />

      <GroopCard title="Zero hassle payments" desc="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month." btn_text="Learn More" img={rasm3} />

    </main>
  )
}

export default HomePage
