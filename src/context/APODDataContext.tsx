import { createContext, ReactNode, useContext, useReducer } from "react"

const defaultState: { apodData: object } = { apodData: {} }

export type Action = {
  type: "FETCH_DATA"
  payload: object
}
export type Dispatch = (action: Action) => void
export type State = typeof defaultState

const APODDataContext = createContext<
  | {
      state: State
      dispatch: Dispatch
    }
  | undefined
>(undefined)

const apodDataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        apodData: action.payload,
      }
  }
}

export const APODDataProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(apodDataReducer, defaultState)

  return (
    <APODDataContext.Provider value={{ state, dispatch }}>
      {children}
    </APODDataContext.Provider>
  )
}

export const useAPODAPI = () => {
  const context = useContext(APODDataContext)

  if (!context)
    throw new Error(
      "selectedDateHook must be used inside SelectedDatesProvider."
    )

  return context
}
