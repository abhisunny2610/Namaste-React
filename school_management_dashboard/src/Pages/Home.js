import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserdata } from '../Redux/UserSlice'
import TotalCountingCard from '../Components/Cards/TotalCountingCard'

const Home = () => {

    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((store) => store.users)

    useEffect(() => {
        dispatch(fetchUserdata({ skip: '0', limit: '100' }))
    }, [dispatch])

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

        <TotalCountingCard />
        </>
    )
}

export default Home