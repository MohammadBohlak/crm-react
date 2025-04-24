import React, { useEffect, useState } from 'react';
import { api } from '../../utils/api/api';
import { ENDPOINTS } from '../../utils/api/endPoints';
import GenericTable from '../common/genericTable/GenericTable';

function UsersTable() {
  const [users, setUsers] = useState([]) ; 
    const getUsers = () => {
      api.get(ENDPOINTS.USERS.GET)
      .then((res) => {
        setUsers(res.data)
        // console.log(res)
      })
    }
    useEffect(()=>{
      getUsers()
    }, [])

     const handleDelete = (id) => {
        if (Array.isArray(id)) {
            // Delete multiple items if `id` is an array
            Promise.all(id.map(singleId => api.delete(ENDPOINTS.USERS.DEL_SOFT(singleId))))
                .then(res => {
                    getUsers();
                })
                .catch(err => {
                    console.log("Error while deleting items:", err);
                });
        } else {
            // Delete a single item as in the original function
            api.delete(ENDPOINTS.USERS.DEL_SOFT(id))
                .then(res => {
                    console.log(res);
                    getUsers();
                })
                .catch(err => {
                    console.log("Error:", err);
                });
        }
    };
  return (
    <>
      <GenericTable
        links= {{add: "/addUser" , edit: "/editUser"}}
        title={"Users"}
        data={users}
        filters={{key:"role", states:["admin", "customer"]}}
        columns={[
          {
            key: "userName", 
            header: "User Name",
            render: (item) => <strong>{item.userName}</strong>
          },
          {
            key: "email",
            header: "Email",
          },
          {
            key: "role",
            header: "Role"
          },
         
        ]}
        identifier="_id"
        onDelete={handleDelete}
        onBulkDelete={handleDelete}
        onEdit={(values) => { console.log(values)}}
      />
    
     </>
  );
}

export default UsersTable;