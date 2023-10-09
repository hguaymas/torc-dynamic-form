import React, { useState } from 'react';
import { FormData, FormField } from './types';
import './DynamicForm.css';

interface DynamicFormProps {
  fields: FormField[];
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleChange = (fieldName: string, value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({});
  };

  return (
    <div className="root-container">
      <div className="title">
        <h3>Torc Dynamic Form</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {fields.map((field, index) => (
            <div key={index} className="field-container">
              <label>{field.label}:</label>
              {field.type === 'select' ? (
                <select
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  value={formData[field.label] || ''}
                >
                  {field.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  value={formData[field.label] || ''}
                />
              )}
            </div>
          ))}
        </fieldset>
        <div className="button-container">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <pre>
            {Object.entries(submittedData).map((field) => (
              <div className="field-result-row">
                <div className="field-label">{field[0]}:</div>
                <div className="field-value">{field[1]}</div>
              </div>
            ))}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DynamicForm;
