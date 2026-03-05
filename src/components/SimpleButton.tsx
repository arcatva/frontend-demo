import './SimpleButton.css'

type SimpleButtonProps = {
  text: string
  onClick?: () => void
  ariaLabel?: string
}

function SimpleButton({ text, onClick, ariaLabel }: SimpleButtonProps) {
  return (
    <button
      type="button"
      className="simple-button"
      onClick={onClick}
      aria-label={ariaLabel ?? text}
    >
      {text}
    </button>
  )
}

export default SimpleButton
