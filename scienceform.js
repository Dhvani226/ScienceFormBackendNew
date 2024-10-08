import React, { useState } from 'react';
import axios from 'axios';

const ScienceForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    schoolName: '',
    schoolAddress: '',
    schoolCity: '',
    schoolState: '',
    schoolPincode: '',
    teacherName: '',
    teacherEmail: '',
    modelType: '',
    participationType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/submit', formData);
      alert('Form submitted successfully!');
      // Clear form fields after successful submission
      setFormData({
        studentName: '',
        schoolName: '',
        schoolAddress: '',
        schoolCity: '',
        schoolState: '',
        schoolPincode: '',
        teacherName: '',
        teacherEmail: '',
        modelType: '',
        participationType: ''
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('Form submission failed!');
    }
  };

  return (
    <div>
      <h1>Science Day Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
        </div>
        <div>
          <label>School Name:</label>
          <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} required />
        </div>
        <div>
          <label>School Address:</label>
          <input type="text" name="schoolAddress" value={formData.schoolAddress} onChange={handleChange} required />
        </div>
        <div>
          <label>School City:</label>
          <input type="text" name="schoolCity" value={formData.schoolCity} onChange={handleChange} required />
        </div>
        <div>
          <label>School State:</label>
          <input type="text" name="schoolState" value={formData.schoolState} onChange={handleChange} required />
        </div>
        <div>
          <label>School Pincode:</label>
          <input type="text" name="schoolPincode" value={formData.schoolPincode} onChange={handleChange} required />
        </div>
        <div>
          <label>Teacher Name:</label>
          <input type="text" name="teacherName" value={formData.teacherName} onChange={handleChange} required />
        </div>
        <div>
          <label>Teacher Email:</label>
          <input type="email" name="teacherEmail" value={formData.teacherEmail} onChange={handleChange} required />
        </div>
        <div>
          <label>Model Type:</label>
          <input type="text" name="modelType" value={formData.modelType} onChange={handleChange} required />
        </div>
        <div>
          <label>Participation Type:</label>
          <input type="text" name="participationType" value={formData.participationType} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ScienceForm;
