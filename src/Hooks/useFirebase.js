import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
    }
    from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebase from "../firebase/firebase.init";

initFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');


    const getEmail = (email) => {
        setEmail(email)
    }

    const getPassword = (password) => {
        setPassword(password)
    }

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const signInUsingEmail = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signUpUsingEmail = () => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [isLoading])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    return {
        user,
        setUser,
        setError,
        setIsLoading,
        googleSignIn,
        isLoading,
        logOut,
        getEmail,
        getPassword,
        signInUsingEmail,
        signUpUsingEmail,
        error
    }

};

export default useFirebase;