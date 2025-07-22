import React from 'react';
import { Button } from '../components/Button';
import { showToast } from '../utils/toast';

const Home = () => {
  const buttonClick = (e) => {
    showToast("Button clicked!", "success");
  };

  return (
    <div>
      <Button 
        text="Button" 
        variant="primary" 
        onClick={buttonClick} 
      />
    </div>
  );
};

export default Home;
