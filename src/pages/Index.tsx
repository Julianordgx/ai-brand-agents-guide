
import React, { useState } from 'react';
import Login from '@/components/Login';
import EBook from '@/components/EBook';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <EBook />;
};

export default Index;
