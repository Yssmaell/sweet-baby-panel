import React from 'react'

const User = (props) => {
    const {firstName, lastName, email} = props
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>            
        </tr>
    )
}
export default User;