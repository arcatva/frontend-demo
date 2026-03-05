import { useState } from 'react'
import './SimpleInput.css'

function SimpleInput() {
  const [value, setValue] = useState('')

  return (
    <div className="simple-input-wrap">
      <label htmlFor="quick-input" className="simple-input-label">
        快速体验
      </label>
      <div className="simple-input-row">
        <input
          id="quick-input"
          type="text"
          className="simple-input"
          placeholder="输入你的想法..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <span className="simple-input-counter">{value.length}/40</span>
      </div>
    </div>
  )
}

export default SimpleInput
