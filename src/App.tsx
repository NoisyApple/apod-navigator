import APODNavigator from "./components/APODNavigator/APODNavigator"
import { SelectedDatesProvider } from "./context/SelectedDatesContext"
import { APODDataProvider } from "./context/APODDataContext"

function App() {
  return (
    <div className="App">
      <SelectedDatesProvider>
        <APODDataProvider>
          <APODNavigator />
        </APODDataProvider>
      </SelectedDatesProvider>
    </div>
  )
}

export default App
