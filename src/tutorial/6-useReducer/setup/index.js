import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      people: [...state.people, action.load],
      showModal: true,
      content: { title: "Ekleme başarılı", color: "green" },
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      content: { title: "Ekleme Başarısız", color: "red" },
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  }
  if (action.type === "REMOVE") {
    const newGroup = state.people.filter((e) => e.id !== action.load);
    return {
      ...state,
      showModal: "true",
      people: newGroup,
      content: { title: "Silinme başarılı", color: "blue" },
    };
  }
};

const defaultState = {
  people: data,
  content: { color: "", title: "" },
  showModal: false,
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({
        type: "ADD",
        load: { name, id: new Date().getTime().toString() },
      });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const close = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.showModal && <Modal myclose={close} veri={state.content} />}

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <article>
        {state.people.map((e) => {
          return (
            <div key={e.id}>
              <h3>{e.name}</h3>
              <button onClick={() => dispatch({ type: "REMOVE", load: e.id })}>
                remove
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Index;
