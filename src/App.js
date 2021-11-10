import React, { useState } from 'react';
import Form from './comps/Form'
import './App.css'

function App() {

    const [members, setMembers] = useState([]);
    const [values, setValues] = useState({name: '', email: '', role: ''})



  const onSubmit = () => {
    setMembers([values, ...members])
    setValues({name: '', email: '', role: ''})
  }

  const onChange = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue})
  }
  console.log(values)
  return (
    <div className="App">
        <h1>TEAM MEMBERS</h1>
        <div className='formBox'>
        <Form
          values={values}
          update={onChange}
          submit={onSubmit}
        />
        {members.map((member, idx) => {
          return (
            <div key={idx}>
              <p>{member.name}</p>
              <p>{member.email}</p> 
              <p>{member.role}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
