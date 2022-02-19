import "./APODNavigator.scss"

const APODNavigator = () => {
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
    </div>
  )
}

export default APODNavigator
