import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h3> Another ToDo List </h3>
        <h4> Click on the task to cross it off! </h4>
        <p>
      <Form/>
        </p>
      </div>
    </div>
  );
}

export default App;
