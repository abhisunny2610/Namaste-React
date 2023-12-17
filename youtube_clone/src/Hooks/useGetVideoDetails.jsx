import { useState, useEffect } from "react"
import { apiKey } from "../Service/api"

const useGetVideoDetails = (id) => {

  const [videoDetail, setVideoDetail] = useState(null)

  useEffect(() => {
    getVideoDetails()
  }, [])

  async function getVideoDetails() {
    const responce = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + id + "&key=" + apiKey)
    const json = await responce.json()
    const data = json.items
    setVideoDetail(data[0])
  }
  
  return videoDetail

}

export default useGetVideoDetails
