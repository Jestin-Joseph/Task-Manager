import { createContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('authToken');
        console.log("vivdw:", storedUser)
        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setAuthToken(storedToken);
        }
    }, [])

    const login = (userData, jwtToken) => {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('authToken', jwtToken);

        setUser(userData);
        setAuthToken(jwtToken);
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');

        setUser(null);
        setAuthToken(null);


    };

    return (
        <AuthContext.Provider value={{ user, authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}



export const ProtectedRoute = ({ children }) => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('authToken');
    if (!storedUser || !storedToken) {
        return <Navigate to="/login" />;
    }

    return children;
};


