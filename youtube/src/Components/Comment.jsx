import React from 'react'
import img from '../Styles/wp7102416-jai-shree-ram-4k-wallpapers.jpg'

const Comment = ({comment}) => {
  return (
    <div className="comment-display d-flex align-items-center gap-2 mb-2">
        <img src={comment.img} alt="profile" width="30px" height="30px"className='rounded-circle' />
        <span className='fw-bold'>{comment.name}</span>
        <span style={{fontSize: "14px"}}>{comment.comment}</span>
    </div>
  )
}


// {<i class="fa-solid fa-circle-user"></i>}
export default Comment