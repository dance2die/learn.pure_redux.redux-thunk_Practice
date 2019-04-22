import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Provider } from 'react-redux'

import store from './store'

import './styles.css'
import SearchForm from './SearchForm'
import Weather from './Weather'

const Title = styled.h1`
  color: #2c59ab;
`

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title>Current Weather</Title>
        <SearchForm />
        <Weather />
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
