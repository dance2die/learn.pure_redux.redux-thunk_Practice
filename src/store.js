import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { SEARCH } from './constants'

const initialState = {
  isLoading: false,
  weather: [],
  city: '',
  error: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH.SEARCH:
      return {
        ...state,
        isLoading: true,
        error: null,
        weather: [],
        city: '',
      }
    case SEARCH.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        weather: action.weather,
        city: action.city,
      }
    case SEARCH.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        weather: [],
        city: '',
      }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
console.log(`store`, store.getState())

export default store
