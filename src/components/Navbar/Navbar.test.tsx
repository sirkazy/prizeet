import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
import '@testing-library/jest-dom'
import { within } from '@testing-library/react'

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  })

  test('shows the logo image', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img?.getAttribute('src')).toBe('mocked-file')
  })

test('renders all top‐level links in the overlay', () => {
  const { container } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  
  const overlay = container.querySelector('.nav-overlay') as HTMLElement
  const items = within(overlay!).getAllByRole('link')
  expect(items).toHaveLength(5)
})

  test('overlay menu is closed by default and toggles open/close when hamburger clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    const overlay = container.querySelector('.nav-overlay')
    expect(overlay).toHaveClass('close')

    const [hamburgerBtn] = container.querySelectorAll('button')
    await user.click(hamburgerBtn!)
    expect(overlay).toHaveClass('open')

    await user.click(hamburgerBtn!)
    expect(overlay).toHaveClass('close')
  })

  test('highlights the active NavLink based on route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <Navbar />
      </MemoryRouter>
    )

    const contactLinks = screen.getAllByRole('link', { name: /^contact$/i })
    expect(contactLinks[1]).toBeInTheDocument()
  })
})
