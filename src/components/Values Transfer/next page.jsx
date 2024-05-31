import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();
  const { totalSubscribers } = location.state || { totalSubscribers: 0 };

  return (
    <div>
      <h1>Next Page</h1>
      <p>Total Subscribers: {totalSubscribers}</p>
    </div>
  );
};

export default NextPage;
