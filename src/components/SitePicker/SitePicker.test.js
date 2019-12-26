import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { SitePicker } from './SitePicker'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<SitePicker />)
})

it('renders without crashing', () => {
  const siteOne = {
    name: 'Site One',
    url: 'site-one'
  }

  const siteTwo = {
    name: 'Site Two',
    url: 'site-two'
  }

  const sites = [siteOne, siteTwo]

  let selectedSite
  const onSiteSelected = (event, site) => {
    selectedSite = site
  }

  const { getByText } = render(
    <SitePicker onSiteSelected={onSiteSelected} sites={sites} />
  )

  sites.forEach(site => {
    const button = getByText(site.name)
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(selectedSite).toEqual(site)
  })
})
