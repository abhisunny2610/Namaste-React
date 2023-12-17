import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useGetVideoDetails from '../Hooks/useGetVideoDetails'
import { formatViews } from '../helper'

const Watch = () => {

  const [search] = useSearchParams()

  const videoDetails = useGetVideoDetails(search.get("v"))

  console.log("dea", videoDetails)

  return (
    <>
      <section className='watch'>
        <iframe width="900" height="400" src={"https://www.youtube.com/embed/" + search.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className="name mt-2">
          <h4 className='text-dark'>{videoDetails?.snippet?.title}</h4>
        </div>
        <div className="details">
            <img src="" alt="" />
          <div className="channel">
            <p className='channel-name'>{videoDetails?.snippet?.channelTitle}</p>
            <p className='subscribe'>{formatViews(videoDetails?.statistics?.viewCount)}</p>
          </div>
          <button>Subscribe</button>

          <button>483</button>
          <button>dislike</button>
          <button>share</button>
        </div>
      </section>
    </>
  )
}

export default Watch