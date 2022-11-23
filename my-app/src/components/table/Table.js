import React from 'react'

function Table() {
  return (
    <div className='container'>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Hobby</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th>1</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Hobby</th>
          <th>Action</th>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Table