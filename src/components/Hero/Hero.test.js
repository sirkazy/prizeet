import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders headline and input', () => {
    render(<Hero />)
    expect(screen.getByText(/save big on smartphones/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/need a smartphone/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('updates input when typing', async () => {
    render(<Hero />)
    const input = screen.getByPlaceholderText(/need a smartphone/i)
    await userEvent.type(input, 'iPhone')
    expect(input).toHaveValue('iPhone')
  })

  it('sets input to "I want affordable phones" on button click', async () => {
    render(<Hero />)
    const button = screen.getByText(/i want affordable phones/i)
    await userEvent.click(button)
    const input = screen.getByPlaceholderText(/need a smartphone/i)
    expect(input).toHaveValue('I want affordable phones')
  })

  it('toggles price dropdown', async () => {
    render(<Hero />)
    const priceButton = screen.getByText(/₦0 - ₦10,000,000/i)
    await userEvent.click(priceButton)

    const priceMin = screen.getAllByText(/₦0/)
    const priceMax = screen.getAllByText(/₦10,000,000/)

    expect(priceMin.length).toBeGreaterThan(0)
    expect(priceMax.length).toBeGreaterThan(0)
  })

  it('toggles perks dropdown and checks a checkbox', async () => {
    render(<Hero />)
    const perksButton = screen.getByText(/select perks/i)
    await userEvent.click(perksButton)

    const checkbox = screen.getByLabelText(/free promotional banners/i)
    expect(checkbox).not.toBeChecked()

    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
