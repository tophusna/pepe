import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/loading/Loading';
import Router from './Routes';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, []);

  const handlePlayClick = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen handleClick={handlePlayClick} />;
  }

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;