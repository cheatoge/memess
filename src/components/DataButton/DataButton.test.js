import React from 'react'
import { DataButton } from './DataButton'
import { render, cleanup, fireEvent } from '@testing-library/react'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<DataButton />)
})

it('displays content and handles clicks with given data', () => {
  let callbackData
  const onClick = (event, data) => {
    callbackData = data
  }

  const { getByText } = render(
    <DataButton onClick={onClick} data="something">
      Click
    </DataButton>
  )

  const content = getByText(/click/i)
  expect(content).toBeInTheDocument()

  fireEvent.click(content)
  expect(callbackData).toEqual('something')
})
