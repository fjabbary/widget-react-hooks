import React, { useState } from 'react'
import { BsXCircle } from "react-icons/bs";


const InputBox = (props) => {

  const { removeWidget, widgetName, valueName, value, changeValue } = props
  const [newValue, setNewValue] = useState(value)
  console.log(newValue);

  return (
    <div className="border border-dark p-3 mb-3">
      <button type="button" className="close" aria-label="Close" onClick={() => removeWidget(widgetName)}>
        <span aria-hidden="true"><BsXCircle /></span>
      </button>

      <p className="mb-1">{`name: ${widgetName} (Inputbox)`}</p>
      <p className="mb-1">{`value name: ${valueName}`}</p>
      <p className="mb-2">{`value: ${value}`}</p>

      <div>
        <input
          type="number"
          className="form-control"
          placeholder="Set value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onBlur={() => changeValue(valueName, newValue)}
        />
      </div>
    </div>
  )
}

export default InputBox
