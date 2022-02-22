export const getCurrentDate = (): string => {
  const currentDate = new Date()

  return getFormattedDate(currentDate)
}

export const getFormattedDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

export const getDatesBetween = (dateA: string, dateB: string): string[] => {
  let dates = [dateA]

  let currentDate = dateA

  const dateObjectA = new Date(dateA)
  const dateObjectB = new Date(dateB)

  const timeDifference = dateObjectA.getTime() - dateObjectB.getTime()
  const differenceInDays = Math.abs(timeDifference / (1000 * 3600 * 24))

  for (let i = 0; i < differenceInDays; i++) {
    currentDate = addDaysToDate(currentDate, 1)
    dates.push(currentDate)
  }

  return [...dates]
}

export const addDaysToDate = (date: string, days: number): string => {
  let dateObject = new Date(date)

  // Days + 1 is needed since there is an unexpected behavior when adding simply the days variable.
  dateObject.setDate(dateObject.getDate() + (days + 1))

  return getFormattedDate(dateObject)
}
