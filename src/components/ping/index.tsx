import React, { useState } from 'react';

interface Field {
  name: string;
  type: string;
  label: string;
  required: boolean;
  options?: string[];
}

interface FormProps {
  fields: Field[];
  onSubmit: (formData: { [key: string]: string }) => void;
}

export const PingbackForm: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '1em', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: '1em' }}>
          <label htmlFor={field.name} style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5em' }}>
            {field.label} {field.required && '*'}
          </label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              required={field.required}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', padding: '0.5em' }}
            >
              <option value="">Select...</option>
              {field.options?.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              required={field.required}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', padding: '0.5em', minHeight: '100px' }}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', padding: '0.5em' }}
            />
          )}
        </div>
      ))}
      <button type="submit" style={{ padding: '0.75em 1.5em', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Submit
      </button>
    </form>
  );
};