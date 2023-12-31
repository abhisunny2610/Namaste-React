import React from 'react'

const TeacherTable = ({ data, columns }) => {
    return (
        <div className="text-nowrap table-responsive ">
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr className='text-center'>
                        {columns.map((column) => (
                            <th key={column.key}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className='text-center'>
                            <td key={rowIndex}>{row?.id}</td>
                            <td key={rowIndex}>{row?.firstName + " " + row?.lastName}</td>
                            <td key={rowIndex}>{row?.company?.department}</td>
                            <td key={rowIndex}>{row?.gender}</td>
                            <td key={rowIndex}>{row?.phone}</td>
                            <td key={rowIndex}>{row?.address?.city}</td>
                            <td key={rowIndex}>{row?.university}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TeacherTable