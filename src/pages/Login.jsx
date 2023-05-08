import React from 'react'
import Signin from './Signin'
import firebaseApp from './firebaseApp'
import { useState } from 'react'
import Profile from './Profile'

const Login = () => {
    const [user, setUser] = useState(null);

    firebaseApp.auth().onAuthStateChanged((user) => {
        setUser(user);
    });
    return user ? <Profile user={user}/> : <Signin />;
}

export default Login