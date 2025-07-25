import React from 'react';
import MultistepForm from '../components/Multistepform';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 px-4">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-primary">Create Your Account</h1>
        <p className="mt-2 text-base-content text-sm">
          Start your journey with us. Just a few quick steps!
        </p>
      </div>
      <MultistepForm />
    </div>
  );
};

export default Signup;
