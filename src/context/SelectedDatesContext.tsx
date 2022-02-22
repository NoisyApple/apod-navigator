import { createContext, ReactNode, useContext, useReducer } from "react"

const defaultState: { selectedDates: string[] } = { selectedDates: [] }

export type Action = {
  type: "SET_DATES"
  payload: string[]
}
export type Dispatch = (action: Action) => void
export type State = typeof defaultState

const SelectedDatesContext = createContext<
  | {
      state: State
      dispatch: Dispatch
    }
  | undefined
>(undefined)

const selectedDatesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DATES":
      return {
        ...state,
        selectedDates: action.payload,
      }
  }
}

export const SelectedDatesProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [state, dispatch] = useReducer(selectedDatesReducer, defaultState)

  return (
    <SelectedDatesContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectedDatesContext.Provider>
  )
}

export const useSelectedDates = () => {
  const context = useContext(SelectedDatesContext)

  if (!context)
    throw new Error(
      "selectedDateHook must be used inside SelectedDatesProvider."
    )

  return context
}
