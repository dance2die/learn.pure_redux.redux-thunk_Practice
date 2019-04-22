import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const WeatherList = styled.ul`
  list-style: none;
`

const WeatherItemDetail = styled.section``

function WeatherItem({ date, temperature, weatherName, weatherAbbr }) {
  return (
    <li>
      <h2>{date}</h2>
      <img
        alt={weatherName}
        src={`https://weather.daveceddia.com/static/img/weather/png/64/${weatherAbbr}.png`}
      />
      <WeatherItemDetail>
        <div>{parseInt(temperature)}°</div>
        <div>{weatherName}</div>
        <hr />
      </WeatherItemDetail>
    </li>
  )
}

function Weather({ isLoading, error, weather, city }) {
  console.log(`Weather weather`, weather, city)
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error occurred: {error.toString()}</div>}
      {city && <h2>"{city}" weather</h2>}
      {weather.length === 0 && <h2>No result found</h2>}
      <WeatherList>
        {weather.map(
          ({
            id,
            applicable_date,
            the_temp,
            weather_state_name,
            weather_state_abbr,
          }) => (
            <WeatherItem
              key={id}
              date={applicable_date}
              temperature={the_temp}
              weatherName={weather_state_name}
              weatherAbbr={weather_state_abbr}
            />
          )
        )}
      </WeatherList>
    </>
  )
}

const mapStateToProps = state => ({
  weather: state.weather,
  city: state.city,
  isLoading: state.isLoading,
  error: state.error,
})
export default connect(mapStateToProps)(Weather)
