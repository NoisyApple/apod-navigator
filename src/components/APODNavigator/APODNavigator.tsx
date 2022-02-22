import "./APODNavigator.scss"

import { useEffect } from "react"

import DateSelector from "./DateSelector/DateSelector"
import APODCard from "./APODCard/APODCard"

import { fetchAPOD } from "../../api/APODService"
import { useSelectedDates } from "../../context/SelectedDatesContext"
import { APODElement, useAPODAPI } from "../../context/APODDataContext"

const APODNavigator = () => {
  const { state: apodAPIData, dispatch } = useAPODAPI()
  const { state: datesData } = useSelectedDates()

  useEffect(() => {
    fetchAPOD(datesData.selectedDates).then((data) => {
      dispatch({ type: "FETCH_DATA", payload: data })
    })
  }, [datesData])

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
      <section className="apod-navigator__cards-section">
        {apodAPIData?.apodData?.apodElements?.map(
          (apodElement: APODElement) => (
            <APODCard {...apodElement} />
          )
        )}
      </section>
      {/* <pre>
        <code style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(datesData, null, 2)}
          {JSON.stringify(apodAPIData, null, 2)}
        </code>
      </pre> */}
    </div>
  )
}

export default APODNavigator
