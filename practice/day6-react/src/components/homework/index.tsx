import React, { useState } from 'react'
import SearchBar from './SearchBar'
import CurrentWeather from './CurrentWeather'
import WeatherDetailCard from './WeatherDetailCard'
import HourlyForecast from './HourlyForecast'
import StatusBar from './StatusBar'
type Props = {}

export default function index({}: Props) {
  const [city, setCity] = useState('Da nang');
  return (
      //  <div className='w-sm bg-cyan-500 h-sm'>hello</div>
      <div className='w-sm mt-10 mx-auto bg-gradient-to-b from-[#9ec4e4] to-[#d5e4f5] pt-3 pb-10 rounded-3xl'>
        <StatusBar />
        <SearchBar onSubmit={setCity} />
        <CurrentWeather city={city} />
        <WeatherDetailCard  city={city}/>
        <HourlyForecast city={city} />
        {/* <HourlyCard time="12:00" temp="20" /> */}
      </div>
  )
}