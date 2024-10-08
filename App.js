import React from 'react';
import ScienceForm from './scienceform'; // Assuming this is your form component
import ApplicationList from './ApplicationList'; // The new list component

const App = () => {
  return (
    <div>
      <ScienceForm />
      <ApplicationList /> {/* This will display the list of applications */}
    </div>
  );
};

export default App;
