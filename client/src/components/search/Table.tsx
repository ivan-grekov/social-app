import React from 'react';

const Table = ({ data }:{data: any}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          {/* <th>First Name</th>
          <th>Email</th> */}
        </tr>
        {data.map((item: any) => (
          <tr key={item._id}>
            <th>{item.users.username}</th>
            {/* <th>{item.last_name}</th>
            <th>{item.email}</th> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
