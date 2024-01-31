import React, { useEffect } from 'react'
import Comment from './Comment'
import img from '../Styles/wp7102416-jai-shree-ram-4k-wallpapers.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Redux/ChetSlice'
import { generateRandomName, makeid ,} from '../helper'

const comments = [
    {
        img: img,
        name: "Abhishek",
        comment: "How are you i am fine",
    },
    {
        img: img,
        name: "Manish",
        comment: "How are you i am fine",
    },
    {
        img: img,
        name: "Hanish",
        comment: "How are you i am fine",
    },
    {
        img: img,
        name: "Kumar",
        comment: "How are you i am fine",
    },
    {
        img: img,
        name: "Monty",
        comment: "How are you i am fine",
    },
]

const CommentSection = () => {


    const dispatch = useDispatch()
    const {messages} = useSelector(state => state.chet)

    useEffect(() => {
        const item = setInterval(() => {
            // console.log('api polling')

            dispatch(addMessage({
                img: img,
                name: generateRandomName(),
                comment : makeid(25)
            }))

        }, 1000);

        return () => clearInterval(item)

    }, [])

    return (
        <div className='p-2 d-flex flex-column flex-column-reverse'>
            {
                messages.map((comment, index) => {
                    return <Comment comment={comment} key={index} />
                })
            }
        </div>
    )
}

export default CommentSection