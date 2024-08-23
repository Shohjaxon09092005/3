import React from 'react'
import CareersBg from '../components/CareersBg'
import '../styles/location.css'
import Map from '../components/Map'
function Location() {
  return (
    <main className='location'>
       <CareersBg title="Locations"/>
       <Map/>
    </main>
  )
}

export default Location
