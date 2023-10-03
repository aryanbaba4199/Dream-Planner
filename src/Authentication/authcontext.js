import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('');
  const [useremail, setUseremail] = useState(''); // Add useremail state

  useEffect(() => {
    // Check local storage for authentication status
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
      // You can also retrieve and set the user's name and useremail here if needed
      const storedName = localStorage.getItem('name');
      const storedUserEmail = localStorage.getItem('useremail'); // Add this line
      if (storedName) {
        setName(storedName);
      }
      if (storedUserEmail) {
        setUseremail(storedUserEmail); // Set useremail state
      }
    }
  }, []);

  const logout = () => {
    // Clear authentication status and useremail from local storage
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('useremail'); // Remove useremail from local storage
    setName('');
    setUseremail(''); // Clear useremail state
    setIsAuthenticated(false);
  };

  const login = (username, userEmail) => {
    // Set authentication status and useremail in local storage
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('name', username);
    localStorage.setItem('useremail', userEmail);
    setName(username);
    setUseremail(userEmail); 
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, name, useremail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
