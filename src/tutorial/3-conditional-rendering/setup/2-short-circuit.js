import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {


  const [error, setError] = useState(false);

  return <>short circuit
    <button className='btn' onClick={()=>setError(!error)} >Click</button>

<h1>{error&&<h1>Hello World</h1>}</h1>
{error ? (<h1>There is no erorr</h1>):(<div>
  <h1>there is An Error.</h1>
</div>)}
  </>;




};




export default ShortCircuit;
