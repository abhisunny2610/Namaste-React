import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useGetVideoDetails from '../Hooks/useGetVideoDetails'
import { formatViews } from '../helper'
import profile from '../Assests/gymbackground.jpg'

const Watch = () => {

  const [search] = useSearchParams()

  const videoDetails = useGetVideoDetails(search.get("v"))

  console.log(videoDetails)

  // const {channelTitle, title, thumbnails} = videoDetails?.snippet

  // const formattedViews = formatViews(videoDetails?.statistics?.viewCount)

  return (
    <>
      <section className='watch px-4 bg-light'>
        <iframe width="700" height="350" src={"https://www.youtube.com/embed/" + search.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className="name mt-2">
          <h4 className='text-dark'>"KAATERA Official 4K Trailer | Darshan | Aradhanaa | Tharun | Rockline Venkatesh | V.Harikrishna"</h4>
        </div>
        <div className="details">
          <div className="channel">
            <img src={profile} alt="" />
            <div className='div'>
              <p className='channel-name fw-bold'>Abhishek</p>
              <p className='views'>{formatViews(78345659)}</p>
            </div>
            <button className='btn subscribw'>Subscribe</button>
          </div>

          <div className="watch-buttons d-flex align-items-center">
            <button className='btn like'><i class="fa-regular fa-thumbs-up"></i> 483</button>
            <button className='btn dislike'><i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i></button>
            <button className='btn share'><i class="fa-solid fa-share"></i> share</button>
          </div>
        </div>


      </section>
    </>
  )
}

export default Watch