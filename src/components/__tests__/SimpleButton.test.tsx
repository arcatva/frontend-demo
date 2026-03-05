import { render, screen, fireEvent } from '@testing-library/react'
import SimpleButton from '../SimpleButton'

describe('SimpleButton', () => {
  test('renders with correct text', () => {
    render(<SimpleButton text="Click me" />)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click me')
  })

  test('has correct type attribute', () => {
    render(<SimpleButton text="Test" />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'button')
  })

  test('applies correct CSS class', () => {
    render(<SimpleButton text="Test" />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('simple-button')
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<SimpleButton text="Click" onClick={handleClick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('does not throw error when clicked without onClick handler', () => {
    render(<SimpleButton text="Click" />)
    const button = screen.getByRole('button')
    expect(() => fireEvent.click(button)).not.toThrow()
  })

  test('renders with empty text', () => {
    render(<SimpleButton text="" />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('')
  })

  test('uses custom aria-label when provided', () => {
    render(<SimpleButton text="Button text" ariaLabel="Custom label" />)
    const button = screen.getByRole('button', { name: /custom label/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'Custom label')
  })

  test('falls back to text for aria-label when not provided', () => {
    render(<SimpleButton text="Default text" />)
    const button = screen.getByRole('button', { name: /default text/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-label', 'Default text')
  })
})
