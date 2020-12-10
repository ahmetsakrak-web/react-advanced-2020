import React from 'react';
const data = {
      eng:['put off',
            'fluke',
            'inference'],
      explain:['to change something to a later time or date',
              '​a lucky or unusual thing that happens by accident, not because of planning or skill',
              'something that you can find out indirectly from what you already know'],
      count:0,
      deneme:['Ana sayfa'],
      
}

const ObjectProject = ()=>{

  const[sozluk,setSozluk] = React.useState(data);

  const gec = ()=>{ 
      setSozluk(prevSozluk=>{
        if(prevSozluk.count<prevSozluk.eng.length-1){

          return {...sozluk, count:prevSozluk.count+1};

        }else{

          return {...sozluk, count:0};

        }
      })
  }

  return(
    <>
    <h1>{sozluk.eng[sozluk.count]}</h1>
  <h3>{sozluk.explain[sozluk.count]}</h3>
  <button className='btn' onClick={gec}>İleri</button>
    </>
  )
}



export default ObjectProject;
