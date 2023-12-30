import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserdata } from '../Redux/UserSlice'
import EmployeeTable from '../Components/Tables/EmployeeTable'
import { EmployeeColumns} from '../Utils/Helper'

const Employee = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((store) => store.users)

  useEffect(() => {
      dispatch(fetchUserdata({ skip: '15', limit: '50' }))
  }, [dispatch])

  if (loading == "loading") {
      return <div>Loading....</div>
  }

  if (loading == "failled") {
      return <div>Error: {error}</div>
  }

return (
  <>
    <EmployeeTable columns={EmployeeColumns} data={users}/>
  </>
)
}

export default Employee