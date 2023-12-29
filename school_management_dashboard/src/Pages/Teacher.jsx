import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TeacherColumns } from '../Utils/Helper'
import TeacherTable from '../Components/Tables/TeacherTable'
import { fetchUserdata } from '../Redux/UserSlice'


const Teacher = () => {

  // const {users} = useSelector((store) => store.users)

  const dispatch = useDispatch()
    const { users, loading, error } = useSelector((store) => store.users)

    useEffect(() => {
        dispatch(fetchUserdata({ skip: '30', limit: '50' }))
    }, [dispatch])

    if (loading == "loading") {
        return <div>Loading....</div>
    }

    if (loading == "failled") {
        return <div>Error: {error}</div>
    }

  return (
    <>
      <TeacherTable columns={TeacherColumns} data={users}/>
    </>
  )
}

export default Teacher