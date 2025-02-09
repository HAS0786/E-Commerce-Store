import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/FormContext';
import { useNavigate } from 'react-router-dom';
import ProductPath from '../../../public/path';

const Login = () => {
 const {token,setToken}=   useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   


    // fetch from Local Storage:::
    useEffect(() => {
        // Fetch email and password from localStorage if available
        const storedName = localStorage.getItem("setname");
        const storedPassword = localStorage.getItem("setpass");
        if (storedName && storedPassword) {
          setUsername(storedName);
          setPassword(storedPassword);
        }
      }, []);

let router=useNavigate()   

    //   handle Submit:::
    const handleSubmit = (e) => {
        e.preventDefault();
            setToken(username+password)

            // store in local storage::
            localStorage.setItem("setname",username)
            localStorage.setItem("setpass",password)


          router("/order")
           
        // Handle form submission logic here
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
