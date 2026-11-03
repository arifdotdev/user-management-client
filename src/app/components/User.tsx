import React, { use } from 'react';

const User = ({ userPromise }) => {
    const users = use(userPromise())
    return (
        <div>
            <h2>user in the components {users.length}</h2>
            {
                users.map(user => <li key={user.id}>{user.name}: {user.email}</li>)
            }
        </div>
    );
};

export default User;