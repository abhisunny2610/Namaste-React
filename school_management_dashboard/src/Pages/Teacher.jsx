import React from 'react'
import { useSelector } from 'react-redux'
import { TeacherColumns } from '../Utils/Helper'
import TeacherTable from '../Components/Tables/TeacherTable'


const Teacher = () => {

  const {users} = useSelector((store) => store.users)

  return (
    <>
      <TeacherTable columns={TeacherColumns} data={users}/>
    </>
  )
}

export default Teacher