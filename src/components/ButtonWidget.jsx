import React from 'react';
import { BsXCircle } from "react-icons/bs";

const CreateButtons = (props) => {

  const { removeWidget, widgetName, valueName, value, changeValue } = props

  return (
    <div className="border border-dark p-3 mb-3">
      <button type="button" className="close" aria-label="Close" onClick={() => removeWidget(widgetName)}>
        <BsXCircle />
      </button>

      <p className="mb-1">{`name: ${widgetName} (Buttons)`}</p>
      <p className="mb-1">{`value name: ${valueName}`}</p>
      <p className="mb-2">{`value: ${value}`}</p>

      <div className="d-flex flex-wrap justify-content-center">
        <button type="button"
          className="btn btn-success mr-3"
          onClick={() => changeValue(valueName, Number(value) + 1)}
        >
          Button: +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => changeValue(valueName, Number(value) - 1)}
        >
          Button: -1
        </button>
      </div>
    </div>
  )
}

export default CreateButtons
