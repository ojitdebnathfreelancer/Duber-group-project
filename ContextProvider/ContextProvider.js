import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../Firebase/firbase.config';

export const DuberContext = createContext();

const auth = getAuth(app);

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'ojit' });

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    // user register 

    const value = { user, userRegister }
    return (
        <DuberContext.Provider value={value}>
            {children}
        </DuberContext.Provider>
    );
};

export default ContextProvider;