import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [person, setPerson] = useState([]);

  const gonder =(e)=>{
    e.preventDefault();
    if(name && email){
      
      const person = {name, email, id:new Date().getTime().toString()};

      setPerson((p)=>{
        return [...p, person];
       
      })
      setName('');
      setEmail('');
    }else{
      alert('Lütfen boş alan bırakmayınız...');
    }
  }

  return(<article>
  <form className='form' onSubmit={gonder}>
    <div className='form-group'>
      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <button type='submit'>Kayıt</button>
  </form>
    {person.map((e)=>{

      return(<div className='item' key={e.id}>
          <h4>{e.name}</h4>
              <p>{e.email}</p>
      </div>)

    })}


  </article>)

  
};

export default ControlledInputs;
