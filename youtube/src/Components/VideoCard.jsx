import React from 'react'
import profile from '../Styles/wp7102416-jai-shree-ram-4k-wallpapers.jpg'
import '../Styles/VideoCard.css'
import '../Styles/Sidebar.css'
import { formatRelativeTime, formatViews } from '../helper'

const VideoCard = ({ data }) => {

    const { snippet, statistics } = data

    const { channelTitle, title, thumbnails } = snippet

    const relativeTime = formatRelativeTime(snippet?.publishedAt)
    const formattedViews = formatViews(statistics?.viewCount)

    return (
        <div className="video-card">
            <div className="thumbnail">
                <img src={thumbnails.medium.url} alt="profile" />
            </div>

            <div className="about d-flex gap-2">
                <div className="channel-profile">
                    <img src={thumbnails.high.url} alt="" width="30px" height="30px" />
                </div>
                <div className="info">
                    <h6 className='description'>{title}</h6>
                    <p className='channel-name'>{channelTitle}</p>
                    <p className='views'>{formattedViews}・{relativeTime}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard