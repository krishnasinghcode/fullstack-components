import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { showToast } from '../utils/toast';

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const buttonClick = () => {
    if (!email || error) {
      showToast('Please enter a valid email.', 'error');
    } else {
      showToast('Button clicked!', 'success');
    }
  };

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => {
          const val = e.target.value;
          setEmail(val);
          setError(val.includes('@') ? '' : 'Invalid email');
        }}
        placeholder="Enter your email"
        error={error}
      />

      <Button 
        text="Submit" 
        variant="primary" 
        onClick={buttonClick} 
      />
    </div>
  );
};

export default Home;

