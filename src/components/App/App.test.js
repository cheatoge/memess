import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'
import { SITES } from './Config'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<App />)
})

it('is displays main page', () => {
  const { getByText } = render(<App />)
  expect(getByText(/enjoy memes/i)).toBeInTheDocument()
})

it('renders buttons in navigation and main page', () => {
  const { queryAllByText } = render(<App />)
  const textSiteButtons = queryAllByText(/anonimowe/i)
  expect(textSiteButtons.length).toBe(2)
})
