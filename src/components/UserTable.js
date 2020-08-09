import React, { useEffect, useState } from 'react';
import User from './User';

const UserTable = () => {

    const[users, setUsers] = useState([]);

    async function fechdataProducts (){
        const respuesta = await fetch("http://localhost:3001/api/users/")
        respuesta.json().then(res => {
            setUsers(res.users);
            console.log(res);
        }).catch(error => console.log (error));
    }

    useEffect(()=> {
        fechdataProducts();
    },[])

    return(
        <div id="content">
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Users Table</h1>
                </div>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item, index)=>{
                                        return <User 
                                        firstName = {item.first_name}
                                        lastName= {item.lasta_name}
                                        email ={item.email}
                                        key={index}
                                        />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserTable;