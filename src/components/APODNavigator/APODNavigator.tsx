import "./APODNavigator.scss"

import useAPOD from "../../hooks/useAPOD"

const APODNavigator = () => {
  const data = useAPOD("2022-02-18")

  return (
    <div className="apod-navigator">
      <section className="apod-navigator__header">
        <h1 className="apod-navigator__title">
          <span className="apod-navigator__drop-cap">A</span>stronomy{" "}
          <span className="apod-navigator__drop-cap">P</span>icture{" "}
          <span className="apod-navigator__drop-cap">O</span>f the{" "}
          <span className="apod-navigator__drop-cap">D</span>ay
        </h1>
        <p className="apod-navigator__subtitle">Navigator</p>
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
