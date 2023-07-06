'use client';

import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <div className={'flex m-10 justify-center'}>
        <p className={'text-white font-sans font-bold'}>{seconds}</p>
      </div>
    </div>
  );
};

export default Dashboard;
