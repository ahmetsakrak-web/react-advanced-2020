import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

    const [user,setUser]=useState('default');
    const [isLoad,setIsLoad]=useState(true);
    const [isError,setIsError]=useState(false);

    useEffect(()=>{

      fetch(url)
                .then(response =>{
                  if(response.status>=200 && response.status<=299){
                    return response.json();
                  }else{
                    setIsLoad(false);
                    setIsError(false);
                    throw new Error(response.statusText);
                  }
                })
                .then(users=>{
                  const {login} = users;
                  setIsLoad(false);
                  setUser(login);
                })
                .catch(err=>console.log(err));

    })





    if(isLoad){
      return <h2>Login</h2>
    }
     if(isError){
      return <h2>Error 404</h2>
    }




return <h2>{user}</h2>
};

export default MultipleReturns;
