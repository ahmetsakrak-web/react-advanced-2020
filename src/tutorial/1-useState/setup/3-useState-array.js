import React from 'react';
import { datam } from '../../../datam';

const UseStateArray = () => {

  const[insanlar,setInsanlar] = React.useState(datam);

  const sil = (id) =>{
    setInsanlar(eskInsanlar=>{
      const yeniInsanlar = eskInsanlar.filter((eskiInsan)=>eskiInsan.id!==id);
      return yeniInsanlar;
    })
  }
  return(
    <>
    {insanlar.map((insan)=>{
      return(
      <div key={insan.id}>
      <p>{insan.name}</p>
      <button className='btn' onClick={()=>sil(insan.id)}>Sil</button>
      </div>
    )})}
    <button className='btn' onClick={()=>{setInsanlar([])}}>Hepsini Sil</button>
    </>
  )
  

  

};

export default UseStateArray;
