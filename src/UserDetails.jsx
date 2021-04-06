import React, { useEffect } from 'react';

export const UserDetails = ({ userId }) => {
  useEffect(() => {
    console.log('Mounted');

    return () => {
      console.log('Unmounted');
    }
  }, []);

  useEffect(() => {
    console.log(`Loading user ${userId} ...`);

    return () => {
      console.log('Clearing', userId)
    }
  }, [userId]);

  return (
    <h2>User {userId}</h2>
  );
};