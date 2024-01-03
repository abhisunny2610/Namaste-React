import React from 'react'
import profile from '../Styles/gymbackground.jpg'
import { formatViews } from '../helper'
import { useSearchParams } from 'react-router-dom'

const Watch = () => {

    const search = useSearchParams()

    return (
        <div className='watch px-4 bg-light'>
            <iframe width="700" height="350" src={"https://www.youtube.com/embed/" + search.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="name mt-2">
                <h4 className='text-dark'>{videoDetails?.snippet?.title}</h4>
            </div>
            <div className="details">
                <div className="channel">
                    <img src={profile} alt="" />
                    <div className='div'>
                        <p className='channel-name fw-bold'>{videoDetails?.snippet?.channelTitle}</p>
                        <p className='views'>{formatViews(videoDetails?.statistics?.viewCount)}</p>
                    </div>
                    <button className='btn subscribw'>Subscribe</button>
                </div>

                <div className="watch-buttons d-flex align-items-center">
                    <button className='btn like'><i class="fa-regular fa-thumbs-up"></i> 483</button>
                    <button className='btn dislike'><i class="fa-regular fa-thumbs-down fa-flip-horizontal"></i></button>
                    <button className='btn share'><i class="fa-solid fa-share"></i> share</button>
                </div>
            </div>


        </div>
    )
}

export default Watch