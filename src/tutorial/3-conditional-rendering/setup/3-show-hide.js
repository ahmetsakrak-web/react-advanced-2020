import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [value, setValue] =useState(false);

  return(<>
  <h1>Bu bir uygulama sayfasıdır</h1>
    {value && <Mycomponent />}
    <button className="btn" onClick={()=>setValue(!value)}>Aç</button>

  </>)}

  const Mycomponent =()=>{
    const[deger,setDeger]=useState(window.innerWidth)
   const sizing =()=>{
    setDeger(window.innerWidth);
    }

    useEffect(()=>{
      window.addEventListener('resize',sizing);
      return()=>{
        window.removeEventListener('resize',sizing);
      }


    },[]);


    return(<>
      <h3>Width: {deger} Px</h3>
    </>)
  }






export default ShowHide;
