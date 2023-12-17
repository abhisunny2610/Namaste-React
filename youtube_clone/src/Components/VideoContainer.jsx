import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import VideoCard from './VideoCard'
import { youtube_video_api } from '../Service/api'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [video, setVideos] = useState([])

  useEffect(()=> {
    getVideos()
  }, [])

  const getVideos = async () => {
    const response = await fetch(youtube_video_api);
    const json = await response.json();
    const data = json?.items

    setVideos(data)
  }

  console.log("videos", video)

  return (
    <div className='video-container'>
      <ButtonList />
     <div className='d-flex flex-wrap gap-2 mt-5'>
     {
        video.map((video, index) => {
          return <Link to={"/watch?v=" + video?.id} key={video?.id} className='text-decoration-none text-dark'><VideoCard key={index} videoData={video}/></Link>
        })
      }
     </div>
    </div>
  )
}

export default VideoContainer