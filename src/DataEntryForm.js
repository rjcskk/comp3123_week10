import React, { useState } from 'react';

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agreeTerms: false,
  });

  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Data Entry Form</h2>
      {!formVisible ? (
        <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
            />
          </div>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="1234 Main St"
          />
        </div>
        <div>
          <label>Address 2:</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Province</label>
          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
          >
            <option>Choose...</option>
            <option>Alberta</option>
            <option>British Columbia</option>
            <option>Manitoba</option>
            <option>Saskatchewan</option>
            <option>Ontario</option>
            <option>Quebec</option>
            <option>New Brunswick</option>
            <option>Newfoundland</option>
            <option>Prince Edward Island</option>
            <option>Yukon</option>
            <option>Nunavut</option>
            <option>Northwest Territory</option>
          </select>
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="Enter postal code"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />{' '}
            Agree to Terms & Conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      ) : (
        <div>
          {/* Display entered information upon submission */}
          <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3>Entered Information:</h3>
            <p>Email: {formData.email}</p>
            <p>Name: {formData.name}</p>
            <p>Address: {formData.address}</p>
            <p>Address 2: {formData.address2}</p>
            <p>City: {formData.city}</p>
            <p>Province: {formData.province}</p>
            <p>Postal Code: {formData.postalCode}</p>
            <p>Agree to Terms & Conditions: {formData.agreeTerms ? 'Yes' : 'No'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataEntryForm;
