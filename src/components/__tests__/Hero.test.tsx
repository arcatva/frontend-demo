import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  test('renders tiny secondary action button with expected styling hook', () => {
    render(<Hero />)

    const tinyButton = screen.getByRole('button', { name: '更多功能' })
    expect(tinyButton).toBeInTheDocument()
    expect(tinyButton).toHaveAttribute('type', 'button')
    expect(tinyButton).toHaveClass('hero-tiny-button')
  })

  test('places tiny button between simple CTA button and quick input', () => {
    render(<Hero />)

    const tinyButton = screen.getByRole('button', { name: '更多功能' })
    const simpleButton = screen.getByRole('button', { name: '立即试用前端演示' })
    const quickInput = screen.getByLabelText('快速体验')

    expect(simpleButton.compareDocumentPosition(tinyButton) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(tinyButton.compareDocumentPosition(quickInput) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  test('triggers tiny button action on click', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    render(<Hero />)

    fireEvent.click(screen.getByRole('button', { name: '更多功能' }))
    expect(alertSpy).toHaveBeenCalledWith('更多功能即将上线')

    alertSpy.mockRestore()
  })
})
