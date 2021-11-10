import React from 'react';

const Form = (props) => {

    const {values, update, submit } = props

    const onChange = evt => {

        const name = evt.target.name

        const { value } = evt.target

        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }


    return(
        <form className='form' onSubmit={onSubmit}>
            <label>Name
            <input
                placeholder='name'
                value={props.values.name}
                name='name'
                onChange={onChange}
                />
            </label>
            <label>Email
                <input
                placeholder='Enter your email here!'
                value={props.values.email}
                name='email'
                onChange={onChange}
             />
            </label>
            <label>Role
             <select value={values.role} name='role' onChange={onChange}>
             <option value="">-- Select a Role --</option>
             <option value="FrontEnd">FrontEnd</option>
             <option value="BackEnd">BackEnd</option>
             <option value="Confused">Confused</option>
             </select>
            </label>
            <div className='submit'>
                <button disabled={!values.name || !values.email || !values.role}>SUBMIT</button>
            </div>
        </form>
    )
}

export default Form;