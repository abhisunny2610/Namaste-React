import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../Redux/VideoSlice'
import VideoCard from './VideoCard'

const VideoSection = () => {

    const dispatch = useDispatch()
    const {videos, loading, error} = useSelector(store => store.videos)
    const data = videos?.items

    useEffect(() => {
        dispatch(fetchVideos())
    }, [])

  return (
    <section>
        <div className="videos-container d-flex flex-wrap gap-4">
            {
                data.map((video) => {
                    return <VideoCard data={video} key={video?.id}/>
                })
            }
        </div>
    </section>
  )
}

export default VideoSection