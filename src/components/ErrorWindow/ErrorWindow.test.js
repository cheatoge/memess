import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ErrorWindow } from './ErrorWindow'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<ErrorWindow />)
})

it('displays correctly with close button', () => {
  const { getByText } = render(<ErrorWindow>Example error</ErrorWindow>)
  expect(getByText('Example error')).toBeInTheDocument()
  expect(getByText(/OK/i)).toBeInTheDocument()
})

it('displays correctly without close button', () => {
  const { queryByText, getByText } = render(
    <ErrorWindow hideCloseButton={true}>Example error</ErrorWindow>
  )
  expect(getByText('Example error')).toBeInTheDocument()
  expect(queryByText(/OK/i)).toBeNull()
})

it('has working onClick callback', () => {
  let hasChanged
  const onClick = event => {
    hasChanged = true
  }

  const { queryByText, getByText } = render(
    <ErrorWindow onClick={onClick}>Example error</ErrorWindow>
  )

  fireEvent.click(queryByText(/OK/i))
  expect(hasChanged).toEqual(true)
})
