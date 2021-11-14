import React, { useState } from 'react'

import InputboxWidget from "components/InputboxWidget"
import ButtonWidget from "components/ButtonWidget"

function App() {
  const [widgets, setWidgets] = useState([])
  const [widgetName, setWidgetName] = useState("")
  const [valueName, setValueName] = useState("")

  const createWidget = (widgetType) => {
    addWidget(
      {
        widgetName,
        valueName,
        widgetType,
        value: 0,
      }
    );
  }

  const addWidget = (widget) => {
    if (widgets.some(item => item.widgetName === widget.widgetName))
      return

    const w = widgets.find(item => item.valueName === widget.valueName)

    if (w)
      setWidgets([
        ...widgets,
        {
          ...widget,
          value: w.value,
        }
      ])
    else
      setWidgets([
        ...widgets,
        widget,
      ])
  }

  const removeWidget = (widgetName) => {
    const newWidgets = widgets.filter(widget => widget.widgetName !== widgetName)
    setWidgets(newWidgets)
  }

  const changeValue = (valueName, value) => {
    const newWidgets = widgets.map((item) => {
      if (item.valueName === valueName) {
        return {
          ...item,
          value: value,
        }
      }

      return item
    })
    setWidgets(newWidgets)
  }

  return (
    <div className="container mx-auto mt-4">
      <div className="row border border-dark border-bottom-0">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="p-2">
            <pre>{JSON.stringify(widgets, null, 2)}</pre>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="px-2 pt-3">
            {
              widgets.map(widget => {
                if (widget.widgetType === "Button") {
                  return (<ButtonWidget
                    removeWidget={removeWidget}
                    widgetName={widget.widgetName}
                    valueName={widget.valueName}
                    value={widget.value}
                    changeValue={changeValue}
                    key={widget.widgetName}
                  />)
                } else {
                  return (<InputboxWidget
                    removeWidget={removeWidget}
                    widgetName={widget.widgetName}
                    valueName={widget.valueName}
                    value={widget.value}
                    changeValue={changeValue}
                    key={widget.widgetName}
                  />)
                }
              })
            }
          </div>
        </div>
      </div>

      <div className="row border border-dark p-3">
        <div className="col-12">
          <p>Add Widget</p>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <input type="text"
            className="form-control"
            value={widgetName}
            placeholder="Widget Name"
            required={true}
            onChange={(e) => setWidgetName(e.target.value)}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <input type="text" name="name2" id="name2" className="form-control"
            value={valueName}
            required={true}
            placeholder="Value Name"
            onChange={(e) => setValueName(e.target.value)}
          />
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <button
            type="button"
            className="btn btn-success form-control"
            onClick={() => createWidget('Inputbox')}
          >
            Create Inputbox
          </button>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <button type="button"
            className="btn btn-success form-control"
            onClick={() => createWidget('Button')}
          >
            Create Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
