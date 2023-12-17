import { useState, useEffect } from "react"
import { apiKey } from "../Service/api"

const useGetVideoDetails = (id) => {

  const [videoDetail, setVideoDetail] = useState([])

  useEffect(() => {
    getVideoDetails()
  }, [])

  async function getVideoDetails() {
    const responce = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + id + "&key=" + apiKey)
    const json = await responce.json()
    const data = json.items
    setVideoDetail(data)
  }
  
  return videoDetail

}

export default useGetVideoDetails
