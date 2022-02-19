import { useEffect, useState } from "react"

const API_KEY = "2LzGTT0e1hgVZZxmMBHkzfVG0BTy0E5iOxBraZg9"
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`

const useAPOD = (date: string) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const constructedUrl = BASE_URL + date

    fetch(constructedUrl)
      .then((response) => response.json())
      .then((retrievedData) => setData(retrievedData))
  }, [])

  return data
}

export default useAPOD
