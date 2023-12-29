import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserdata } from '../Redux/UserSlice'

const Home = () => {

    const limit = 100
    const skip = 0

    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUserdata({ skip: '0', limit: '100' }))
    }, [dispatch])

    console.log(users)

    if (loading == "loading") {
        return <div>Loading....</div>
    }

    if (loading == "failled") {
        return <div>Error: {error}</div>
    }

    return (
        <>
        {/* {
            users.map((item) => {
                return <li key={item.id}>{item.firstName}</li>
            })
        } */}
        </>
    )
}

export default Home