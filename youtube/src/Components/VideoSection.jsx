import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../Redux/VideoSlice'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoSection = () => {

    const dispatch = useDispatch()
    const {videos, status} = useSelector((store) => store.videos)
    const data = videos?.items

    useEffect(() => {
        dispatch(fetchVideos())
    }, [dispatch])

    if (status === "loading"){
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error loading videos:</div>;
      }

  return (
    <section>
        <div className="videos-container d-flex flex-wrap gap-4">
            {
                data.map((video) => (
                    <Link to={'/watch?v=' + video?.id} key={video?.id} className='text-decoration-none text-dark'><VideoCard data={video} key={video?.id}/></Link>
                ))
            }
        </div>
    </section>
  )
}

export default VideoSection