import React, { useState } from 'react';
import Form from './comps/Form'

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
        <Form
          values={values}
          change={onChange}
          submit={onSubmit}
        />
        {members.map((member, idx) => {
          return (
            <div key={idx}>
              {member.email}, {member.name}, {member.role}
            </div>
          )
        })}
    </div>
  );
}

export default App;
