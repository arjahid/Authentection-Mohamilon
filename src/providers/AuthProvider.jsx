import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';


export  const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const createUsers=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        name:'jahid',
        createUsers,
        signInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;