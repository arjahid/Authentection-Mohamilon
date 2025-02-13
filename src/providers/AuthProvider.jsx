import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export  const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUsers=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const  signOutUser=()=>{
        return signOut(auth);
    }
    const authInfo={
        name:'jahid',
        user,
        createUsers,
        signInUser,
        signOutUser
    }
   useEffect(()=>{
    const unscrive= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)

    })
    return ()=>{
        unscrive()
    }
   },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;