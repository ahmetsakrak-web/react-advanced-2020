import React, { useState, useEffect } from 'react';


const UseEffectFetchData = () => {

  const [user,setUser]=useState([]);
  const url = 'http://api.github.com/users';
  const getUsers = async ()=>{
  const responce = await fetch(url);
  const users = await responce.json();
  setUser(users);
}


 useEffect(()=>{
   getUsers();
 },[])
 


  return (<>
  <h3>Github Users</h3>
    <ul className='users'>
    {user.map((e)=>{
      const {id,login,html_url,avatar_url} = e;
      return(
        <li  key={id}>
            <img src={avatar_url} alt={login}></img>
          <div>
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
          </div>
        </li>
      )
    })}
 </ul>
        </>);
};

export default UseEffectFetchData;
