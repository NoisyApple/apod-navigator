import { useEffect, useState } from "react"

const API_KEY = "2LzGTT0e1hgVZZxmMBHkzfVG0BTy0E5iOxBraZg9"
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`

type useAPODOverload = {
  (date: string): object
  (dates: string[]): object
}

const useAPOD: useAPODOverload = (date: string | string[]) => {
  const [data, setData] = useState<object>({})

  useEffect(() => {
    const datesArray = typeof date === "string" ? [date] : date

    if (datesArray[0] !== "") {
      Promise.all(
        datesArray.map((date) => fetch(BASE_URL + date).then((r) => r.json()))
      ).then((retrievedData) => setData({ data: retrievedData }))
    } else {
      setData({ data: [] })
    }
  }, [])

  return data
}

export default useAPOD
