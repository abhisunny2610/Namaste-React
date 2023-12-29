import React from 'react'

const EmployeeTable = ({ data, columns }) => {
    return (
        <div className="text-nowrap  table-responsive ">
            <table className="table table-sm table-striped">
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
                            <td key={rowIndex}>{row?.gender}</td>
                            <td key={rowIndex}>{row?.phone}</td>
                            <td key={rowIndex}>{row?.address?.city}</td>
                            <td key={rowIndex}>{row?.university}</td>
                            <td><button className='btn btn-sm btn-success'>View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable