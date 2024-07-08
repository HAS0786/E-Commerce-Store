import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const FormContext = ({ children }) => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const login = (username, password) => {
        const userToken = username + password;
        setToken(userToken);
        localStorage.setItem('token', userToken);
        localStorage.setItem('setname', username);
        localStorage.setItem('setpass', password);
        
        const redirectPath = localStorage.getItem('redirectPath') || '/';
        localStorage.removeItem('redirectPath');
        navigate(redirectPath);
    };

    return (
        <AuthContext.Provider value={{ token, setToken, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default FormContext
