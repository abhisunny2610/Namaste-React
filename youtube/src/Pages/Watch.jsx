import React, { useEffect } from 'react'
import profile from '../Styles/gymbackground.jpg'
import { formatViews } from '../helper'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoById } from '../Redux/VideoSlice'

const Watch = () => {

    const dispatch = useDispatch()
    const [search] = useSearchParams()
    const videoId = search.get('v')

    const {selectedVideo , status}= useSelector((state) => state.videos)

    useEffect(()=> {
        dispatch(fetchVideoById(videoId))
    }, [dispatch, search])

    if (status === "loading"){
        return <div>Loading...</div>
    }

    if (status === "failed"){
        return <div>Error loading video:</div>
    } 

    return (
        <div className='watch px-4 bg-light'>
            <iframe width="700" height="350" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="name mt-2">
                <h4 className='text-dark'>{selectedVideo?.snippet?.title}</h4>
            </div>
            <div className="details">
                <div className="channel">
                    <img src={selectedVideo?.snippet?.thumbnails.medium.url} alt="" />
                    <div className='div'>
                        <p className='channel-name fw-bold'>{selectedVideo?.snippet?.channelTitle}</p>
                        <p className='views'>{formatViews(selectedVideo?.statistics?.viewCount)}</p>
                    </div>
                    <button className='btn subscribw'>Subscribe</button>
                </div>

                <div className="watch-buttons d-flex align-items-center">
                    <button className='btn like'><i className="fa-regular fa-thumbs-up"></i> 483</button>
                    <button className='btn dislike'><i className="fa-regular fa-thumbs-down fa-flip-horizontal"></i></button>
                    <button className='btn share'><i className="fa-solid fa-share"></i> share</button>
                </div>
            </div>
        </div>
    )
}

export default Watch