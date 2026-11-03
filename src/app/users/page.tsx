import React, { Suspense } from 'react';
import User from '../components/User';

const userPromise = async() => {
    const data = await fetch('http://localhost:5000/user')
    return data.json()
}

const UsersPage = async() => {
    

    return (
        <div>
            <h2>User data coming soon: </h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <User userPromise={userPromise}></User>
            </Suspense>
        </div>
    );
};

export default UsersPage;   