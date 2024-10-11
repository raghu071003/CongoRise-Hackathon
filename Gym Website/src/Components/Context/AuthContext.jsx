import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const [invalidlogin,setInvalidLogin] = useState(true);

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://backend-panther-a7he.onrender.comlogin', {
        email: username,
        password: password,
      });
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        setIsAuthenticated(true);
      }
      
    } catch (error) {
        alert('Invalid Credentials')
        setInvalidLogin(true);
        setIsAuthenticated(false);
    }
  };

  const logout = async() => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      const response = await fetch('https://backend-panther-a7he.onrender.comlogout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${refreshToken}`
        }
      });

      if (response.ok) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href='/login'
        setIsAuthenticated(false)
      } else {
        console.error('Logout failed:', await response.text());
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  const refreshAccessToken = async () => {
    if (refreshToken) {
      try {
        const res = await axios.post('https://backend-panther-a7he.onrender.comrefresh', {}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${refreshToken}`,
          }
        });

        if (res.status === 200) {
          const newAccessToken = res.data.accessToken;
          setAccessToken(newAccessToken);
          localStorage.setItem('accessToken', newAccessToken);
        } else {
          console.error('Failed to refresh token:', res.statusText);
        }
      } catch (error) {
        console.error('Token refresh error:', error);
      }
    } else {
      console.error('No refresh token available');
    }
  };

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');

        setAccessToken(storedAccessToken);
        setRefreshToken(storedRefreshToken);

        if (storedRefreshToken) {
          await refreshAccessToken();
        }
      } catch (error) {
        console.error('Token fetch error:', error);
      }
    };

    fetchTokens();

    const interval = setInterval(() => {
      refreshAccessToken();
    }, 10 * 60 * 1000); // Refresh token every 10 minutes

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, accessToken, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
