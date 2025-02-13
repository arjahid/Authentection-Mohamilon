import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


export  const AuthContext=createContext();
const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUsers=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const  signOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const authInfo={
        name:'jahid',
        user,
        createUsers,
        signInUser,
        signOutUser,
        loading,
        signInWithGoogle
    }
   useEffect(()=>{
    const unscrive= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)

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