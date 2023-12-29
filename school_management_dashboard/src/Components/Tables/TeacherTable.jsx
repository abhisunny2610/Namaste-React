import React from 'react'

const TeacherTable = ({data, columns}) => {
  return (
        <table class="table table-striped">
          <thead className='table-dark'>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {/* Check if the value is an object and render accordingly */}
                    {typeof row[column.key] === 'object'
                      ? JSON.stringify(row[column.key])
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default TeacherTable