import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/applications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Submitted Applications</h2>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <h3>{application.studentName} - {application.schoolName}</h3>
            <p>{application.schoolAddress}, {application.schoolCity}, {application.schoolState}, {application.schoolPincode}</p>
            <p>Teacher: {application.teacherName} ({application.teacherEmail})</p>
            <p>Model Type: {application.modelType}, Participation Type: {application.participationType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;
