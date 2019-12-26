import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { TextMeme } from './TextMeme'

afterEach(cleanup)

it('renders without crashing', () => {
  const content = { text: 'Some text meme with' }
  const { getByText } = render(<TextMeme content={content} />)

  expect(getByText(/text meme/i)).toBeInTheDocument()
})

it('replaces newlines with <br /> tags', () => {
  const content = { text: 'Some text meme with\na new line' }
  const { container } = render(<TextMeme content={content} />)

  expect(container.querySelector('br')).toBeInTheDocument()
})
