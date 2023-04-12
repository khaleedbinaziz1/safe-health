import React from 'react'

const table = ({data}) => {
  return (
   <table>
    <tbody>
        <tr>
            <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>
        {data.map((item) => (
              <tr>
                <th>{item._id}</th>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{item.phone}</th>
          </tr>
          
        ))}
          
        

    </tbody>
   </table>
  )
}

export default table