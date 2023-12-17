import React from 'react'
import {formatRelativeTime, formatViews} from '../helper'

const VideoCard = ({videoData}) => {

  const {snippet, statistics} = videoData

  const {channelTitle, title, thumbnails} = snippet

  const relativeTime = formatRelativeTime(snippet?.publishedAt)
  const formattedViews = formatViews(statistics?.viewCount)

  return (
    <div className="videocard">
      <div className="thumbnail">
        <img src={thumbnails.medium.url} alt="" />
      </div>

      <div className="details mt-2">
        <h4 className='title'>{title}</h4>
        <p className='channel'>{channelTitle}</p>
        <p className='view'>{formattedViews}・{relativeTime}</p>
      </div>
    </div>
  )
}

export default VideoCard