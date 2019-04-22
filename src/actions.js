import { SEARCH } from './constants'

function search(query) {
  const toJson = _ => _.json()

  return async dispatch => {
    dispatch({ type: SEARCH.BEGIN })

    try {
      const firstCity = (await fetch(
        `https://weather.daveceddia.com/api/location/search/?query=${encodeURIComponent(
          query
        )}`
      ).then(toJson))[0]

      if (!firstCity) {
        dispatch({ type: SEARCH.SUCCESS, weather: [], city: '' })
      } else {
        const { woeid } = firstCity
        const { consolidated_weather: weather, title: city } = await fetch(
          `https://weather.daveceddia.com/api/location/${woeid}`
        ).then(toJson)
        dispatch({ type: SEARCH.SUCCESS, weather, city })
      }
    } catch (error) {
      dispatch({ type: SEARCH.ERROR, error })
    }
  }
}

export { search }
