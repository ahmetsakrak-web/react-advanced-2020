import React, {useState} from 'react'
import { data } from '../../../data'



const Project = () => {
    const [people, setPeople] = useState(data);

    const hepsiniSil =()=>{
        setPeople((pre)=> {return pre=[]});
    }
    return (
        <main>
        <section className='users'>
               <h3>{people.length} birthdays today</h3>
            {people.map((person)=>{
                return(
        <article class="person">
            <img src={person.img} alt={person.name} />
            <div>
                <h4>{person.name}</h4>
                <p className="small">{person.age} years</p>
            </div>
        </article>
                        )
            })}
     <button className="btn" onClick={hepsiniSil} >Clear All</button>
     
        </section>
        </main>
    )
}

export default Project
