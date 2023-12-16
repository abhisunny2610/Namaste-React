import React from 'react'
import Sidebar from '../Components/Sidebar'
import VideoContainer from '../Components/VideoContainer'

const Home = () => {
  return (
    <section className='d-flex'>
    <Sidebar />
    <VideoContainer />
    </section>
  )
}

export default Home