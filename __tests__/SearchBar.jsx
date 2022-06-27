import { render, screen } from '@testing-library/react'
import SearchBar from '../pages/index'
import '@testing-library/jest-dom'

describe('SearchBar', () => {
  it('renders SearchBar', () => {
    const { getByPlaceholderText, getByRole } = render(<SearchBar />)

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
    expect(getByRole('button', { name: /submit-button/i }))
  })
})