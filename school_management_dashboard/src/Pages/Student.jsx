import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StudentColumns } from '../Utils/Helper'
import { fetchUserdata } from '../Redux/UserSlice'
import StudentTable from '../Components/Tables/StudentTable'

const Student = () => {
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
      <StudentTable columns={StudentColumns} data={users}/>
    </>
  )
}

export default Student