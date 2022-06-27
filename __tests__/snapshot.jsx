import { render } from '@testing-library/react'
import HomePage from '../pages/index'

it('renders HomePage unchanged', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})