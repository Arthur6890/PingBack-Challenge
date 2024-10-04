import React from 'react';
import { PingbackForm } from './components/ping';
import { fields } from './utils/fields';

function App() {
  
  const handleSubmit = (data: { [key: string]: string }) => {
    console.log('Form data submitted:', data);
    alert('Form submitted successfully');
  };
  return (
    <PingbackForm fields={fields} onSubmit={handleSubmit}/>
    );
}

export default App;
