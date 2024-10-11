import axios from 'axios';
import { useState, useEffect } from 'react';

const TokenRefreshComponent = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  const refresh = async () => {
    if (refreshToken) {
      try {
        const res = await axios.post('http://localhost:4080/refresh', {}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${refreshToken}`
          }
        });

        if (res.status === 200) {
          const newAccessToken = res.data.accessToken;
          setAccessToken(newAccessToken);
          localStorage.setItem('accessToken', newAccessToken); // Store the new access token
          console.log('Access token refreshed successfully');
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
          await refresh();
        }
      } catch (error) {
        console.error('Token fetch error:', error);
      }
    };

    fetchTokens();

    const interval = setInterval(() => {
      refresh();
    }, 10 * 60 * 1000); // Refresh token every 10 minutes

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []); // Run only once on component mount

  return (
    <>
    </>
  );
};

export default TokenRefreshComponent;
