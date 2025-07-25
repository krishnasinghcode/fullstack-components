import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const MultistepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const next = () => {
    if (step < 2) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    alert(`Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Step {step + 1} of 3</h2>

      {step === 0 && (
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
      )}

      {step === 1 && (
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      )}

      {step === 2 && (
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      )}

      <div className="flex justify-between pt-4">
        <Button
          text="Previous"
          onClick={prev}
          variant="outline"
          disabled={step === 0}
        />
        {step === 2 ? (
          <Button text="Submit" onClick={handleSubmit} variant="primary" />
        ) : (
          <Button text="Next" onClick={next} variant="primary" />
        )}
      </div>
    </div>
  );
};

export default MultistepForm;
