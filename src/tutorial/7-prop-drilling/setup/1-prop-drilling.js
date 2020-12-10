import React, { useState } from "react";
import { datam } from "../../../datam";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(datam);

  const sil = (id) => {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <ListPeople content={people} myFunc={sil} />
    </>
  );
};

const ListPeople = ({ content, myFunc }) => {
  return (
    <>
      {content.map((person) => {
        return <SingleItem key={person.id} {...person} funcm={myFunc} />;
      })}
    </>
  );
};

const SingleItem = ({ id, name, funcm }) => {
  return (
    <>
      <div>
        {name} <button onClick={() => funcm(id)}>Remove</button>
      </div>
    </>
  );
};

export default PropDrilling;
