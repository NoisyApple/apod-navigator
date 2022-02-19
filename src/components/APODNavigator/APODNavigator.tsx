import "./APODNavigator.scss"

import useAPOD from "../../hooks/useAPOD"
import DateSelector from "./DateSelector/DateSelector"

const APODNavigator = () => {
  const data = useAPOD("")

  return (
    <div className="apod-navigator">
      <section className="apod-navigator__header-section">
        <h1 className="apod-navigator__title">
          <span className="apod-navigator__drop-cap">A</span>stronomy{" "}
          <span className="apod-navigator__drop-cap">P</span>icture{" "}
          <span className="apod-navigator__drop-cap">O</span>f the{" "}
          <span className="apod-navigator__drop-cap">D</span>ay
        </h1>
        <p className="apod-navigator__subtitle">Navigator</p>
      </section>
      <section className="apod-navigator__date-selector-section">
        <DateSelector />
      </section>
      <pre>
        <code style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </div>
  )
}

export default APODNavigator
