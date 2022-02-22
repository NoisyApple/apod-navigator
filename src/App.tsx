import APODNavigator from "./components/APODNavigator/APODNavigator"
import { SelectedDatesProvider } from "./context/SelectedDatesContext"

function App() {
  return (
    <div className="App">
      <SelectedDatesProvider>
        <APODNavigator />
      </SelectedDatesProvider>
    </div>
  )
}

export default App
