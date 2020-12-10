import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
 // const [firstName, setFirstName] = useState('');
 // const [email, setEmail] = useState('');

 const [person,setPerson] = useState({name:'',age:'',email:''});
 const [people,setPeople] = useState([]);

 const handleChange =(e)=>{
    e.preventDefault();
   const name = e.target.name;
   const value = e.target.value;
   setPerson({...person,[name]:value});
 }
 const save = (e)=>{
    e.preventDefault();
    if(person.name&&person.age&&person.email)
    {setPeople([...people, {...person, id: new Date().getTime().toString()}]);
    setPerson({name:'',age:'',email:''});}else{
      alert('please try again');
    }
 }


  return (
    <>
      <article>
      <form className='form' onSubmit={save}>
        <div className='form-group'>
            <label htmlFor="name">name</label>
            <input type="text"
             value={person.name} 
            name="name"
            id="name" 
            onChange={handleChange} />
        </div>
                <div className='form-group'>
            <label htmlFor="email">email</label>
            <input type="email" 
            value={person.email} 
            name="email"
            id="email" 
            onChange={handleChange} />
        </div>
                <div className='form-group'>
            <label  htmlFor="age">age</label>
            <input type="text"
             value={person.age} 
            name="age"
            id="age" 
            onChange={handleChange} />
        </div>
        <button type='submit'>Add</button>

      </form>
      {people.map((person)=>{

         return (<div key={person.id}>
           <h3>{person.name}</h3>
              <h3>{person.email}</h3>
              <h2>{person.age}</h2>
          </div>)
      })}
      </article>
    </>
  );
};

export default ControlledInputs;
