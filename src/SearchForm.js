import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { search } from './actions'

const CityInput = styled.input`
  width: 300px;
  height: 2.5rem;
  text-align: center;
  font-size: 1.75rem;
`

const ButtonSection = styled.section`
  margin-top: 1rem;
`

const SubmitButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #2c59ab;
  color: white;
  font-size: 1.2rem;
`

function SearchForm({ search }) {
  const [query, setQuery] = React.useState('')
  const updateQuery = React.useCallback(e => setQuery(e.target.value), [])
  const submit = e => {
    e.preventDefault()
    search(query)
  }

  return (
    <form onSubmit={submit}>
      <CityInput
        type="text"
        value={query}
        placeholder="Enter City"
        onChange={updateQuery}
      />
      <ButtonSection>
        <SubmitButton type="submit">Get it!</SubmitButton>
      </ButtonSection>
    </form>
  )
}

const mapDispatchToProps = { search }
export default connect(
  undefined,
  mapDispatchToProps
)(SearchForm)
