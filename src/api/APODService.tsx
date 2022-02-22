const API_KEY = "2LzGTT0e1hgVZZxmMBHkzfVG0BTy0E5iOxBraZg9"
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`

type fetchAPODOverload = {
  (date: string): Promise<object>
  (dates: string[]): Promise<object>
}

export const fetchAPOD: fetchAPODOverload = async (date: string | string[]) => {
  let data: {
    apodElements: any
  } = {
    apodElements: [],
  }

  const datesArray = typeof date === "string" ? [date] : date

  if (datesArray[0] !== "") {
    const responses = await Promise.all(
      datesArray.map((date) => fetch(BASE_URL + date))
    )

    const retrievedData = await Promise.all(responses.map((r) => r.json()))

    data = {
      apodElements: retrievedData,
    }
  }

  return data
}
