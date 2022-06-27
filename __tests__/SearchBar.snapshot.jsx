import { render } from '@testing-library/react'
import SearchBar from '../pages/SearchBar'

it('renders SearchBar unchanged', () => {
  const { container } = render(<SearchBar />)
  expect(container).toMatchSnapshot()
})