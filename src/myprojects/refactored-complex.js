import React, { useState, useReducer } from "react";
import Modal from "./Modal";

const translate = [
  {
    english: "Word 1",
    explanation: "This is Explanation 1",
    example: "This is example 1",
    id: 1,
  },
  {
    english: "Word 2",
    explanation: "This is Explanation 2",
    example: "This is example 2",
    id: 2,
  },
  {
    english: "Word 3",
    explanation: "This is Explanation 3",
    example: "This is example 3",
    id: 3,
  },
];

const defaultState = {
  showForm: false,
  data: translate,
  count: 0,
  oneset: {
    english: "",
    explanation: "",
    example: "",
  },
  modal: { color: "", content: "" },
  isModal: false,
};

const reducer = (state, action) => {
  if (action.type === "SKIP") {
    console.log(state.data);
    if (state.count < state.data.length - 1) {
      return { ...state, count: state.count + 1 };
    } else {
      return { ...state, count: 0 };
    }
  }

  if (action.type === "MATCH") {
    return {
      ...state,
      oneset: { ...state.oneset, [action.payload.name]: action.payload.value },
    };
  }

  if (action.type === "ADD") {
    if (
      state.oneset.english &&
      state.oneset.example &&
      state.oneset.explanation
    ) {
      const newOneset = {
        ...state.oneset,
        id: new Date().getTime().toString(),
      };
      return {
        ...state,
        data: [...state.data, newOneset],
        oneset: { english: "", explanation: "", example: "" },
        modal: {
          color: "green",
          content: `Adding "${newOneset.english}" is successfully completed`,
        },
        isModal: true,
      };
    } else {
      alert("something is wrong");
    }
  }

  if (action.type === "MODAL_OFF") {
    return {
      ...state,
      isModal: false,
    };
  }
};

const Complex = () => {
  const [view, setView] = useState(false);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const skip = () => {
    dispatch({ type: "SKIP" });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "MATCH", payload: { name, value } });
  };

  const kaydet = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD" });
  };
  const modalfunc = () => {
    dispatch({ type: "MODAL_OFF" });
  };

  return (
    <div>
      <h1> {state.data[state.count].english} </h1>
      <h3> {state.data[state.count].explanation} </h3>
      <p> {state.data[state.count].example} </p>
      <button className="btn" onClick={skip}>
        {" "}
        Skip{" "}
      </button>
      <br></br>
      {state.isModal && <Modal content={state.modal} fak={modalfunc} />}
      <br></br>

      <button className="btn" onClick={() => setView(!view)}>
        Forumu Aç
      </button>
      {view && (
        <article>
          <form className="form">
            <div className="form-group">
              <label htmlFor="english">English</label>
              <input
                type="text"
                name="english"
                id="english"
                value={state.oneset.english}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="explanation">Explanation</label>
              <input
                type="text"
                name="explanation"
                id="explanation"
                value={state.oneset.explanation}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="example">Example</label>
              <input
                type="text"
                name="example"
                id="example"
                value={state.oneset.example}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={kaydet}>
              Add
            </button>
          </form>
        </article>
      )}
    </div>
  );
};

export default Complex;
