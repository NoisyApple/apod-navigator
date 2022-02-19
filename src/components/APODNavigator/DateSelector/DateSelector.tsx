import { ChangeEvent, useState } from "react"

import { getCurrentDate } from "../../../utils/utils"

type formData = {
  isRangeEnabled: boolean
  initialDate: string
  endDate: string
}

const DateSelector = () => {
  const [formData, setFormData] = useState<formData>({
    isRangeEnabled: false,
    initialDate: getCurrentDate(),
    endDate: getCurrentDate(),
  })

  const handleFormInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="date-selector">
      <form action="" className="date-selector__form">
        <div className="date-selector__input-wrapper">
          <label htmlFor="isRangeEnabled" className="date-selector__label">
            Search by range:
          </label>
          <input
            value={formData.isRangeEnabled.toString()}
            onChange={handleFormInputChange}
            type="checkbox"
            name="isRangeEnabled"
            id="isRangeEnabled"
          />
        </div>

        <div className="date-selector__input-wrapper">
          <label htmlFor="initialDate" className="date-selector__label">
            {!formData.isRangeEnabled ? "APOD date:" : "APOD initial date:"}
          </label>
          <input
            value={formData.initialDate}
            onChange={handleFormInputChange}
            type="date"
            name="initialDate"
            id="initialDate"
            max={getCurrentDate()}
          />
        </div>

        {formData.isRangeEnabled && (
          <div className="date-selector__input-wrapper">
            <label htmlFor="endDate" className="date-selector__label">
              End date:
            </label>
            <input
              value={formData.endDate}
              onChange={handleFormInputChange}
              type="date"
              name="endDate"
              id="endDate"
              min={formData.initialDate}
              max={getCurrentDate()}
              disabled={!formData.isRangeEnabled}
            />
          </div>
        )}
      </form>
      <pre>
        <code>{JSON.stringify(formData, null, 2)}</code>
      </pre>
    </div>
  )
}

export default DateSelector
