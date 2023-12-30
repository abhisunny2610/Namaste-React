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

    const data = [
        {
            icon: <i class="fa-solid fa-users"></i>,
            title: "Students",
            total: "100",
            color: "yellow"
        },
        {
            icon: <i class="fa-solid fa-user-tie"></i>,
            title: "Teacher",
            total: "70",
            color: "green"
        },
        {
            icon: <i class="fa-solid fa-user-injured"></i>,
            title: "Employee",
            total: "50",
            color: "red"
        },
        {
            icon: <i class="fa-solid fa-sack-dollar"></i>,
            title: "Total Income",
            total: "269404",
            color: "blue"
        },
    ]

    return (
        <>
            {/* {
            users.map((item) => {
                return <li key={item.id}>{item.firstName}</li>
            })
        } */}

            <div className='t-cards d-flex justify-content-between gap-5'>
                {
                    data.map((items, index) => {
                        return <TotalCountingCard data={items} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default Home