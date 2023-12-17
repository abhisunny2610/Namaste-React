import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useGetVideoDetails from '../Hooks/useGetVideoDetails'

const Watch = () => {

  const [search] = useSearchParams()

  const videoDetails = useGetVideoDetails(search.get("v"))

  console.log("dea", videoDetails)

  return (
    <>
    <section className='watch'>
      <iframe width="900" height="400" src={"https://www.youtube.com/embed/" + search.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </section>
    <div className="details">
        <h4>{videoDetails?.snippet?.categoryId}</h4>
      </div>
    </>
  )
}

export default Watch