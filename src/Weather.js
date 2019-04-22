import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const WeatherList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`

const WeatherItemContainer = styled.li`
  padding: 1rem;
`
const WeatherItemDetail = styled.section``

function WeatherItem({ date, temperature, weatherName, weatherAbbr }) {
  return (
    <WeatherItemContainer>
      <h3>{date}</h3>
      <img
        alt={weatherName}
        src={`https://weather.daveceddia.com/static/img/weather/png/64/${weatherAbbr}.png`}
      />
      <WeatherItemDetail>
        <div>
          <strong>{parseInt(temperature)}°</strong>
        </div>
        <div>{weatherName}</div>
      </WeatherItemDetail>
    </WeatherItemContainer>
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
