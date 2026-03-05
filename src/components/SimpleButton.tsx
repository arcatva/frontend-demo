import './SimpleButton.css'

type SimpleButtonProps = {
  text: string
  onClick?: () => void
}

function SimpleButton({ text, onClick }: SimpleButtonProps) {
  return (
    <button type="button" className="simple-button" onClick={onClick}>
      {text}
    </button>
  )
}

export default SimpleButton
