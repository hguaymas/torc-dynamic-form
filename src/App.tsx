import React from 'react';
import './App.css';
import DynamicForm from './components/DynamicForm';
import { FormField } from './components/types';

function App() {
  const fields: FormField[] = [
    { type: 'text', label: 'Name' },
    { type: 'number', label: 'Age' },
    {
      type: 'select',
      label: 'Gender',
      options: ['', 'Male', 'Female', 'Other'],
    },
  ];

  return (
    <div className="App">
      <DynamicForm fields={fields} />
    </div>
  );
}

export default App;
