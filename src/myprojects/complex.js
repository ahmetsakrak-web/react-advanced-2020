import React, { useState } from "react";

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

const Complex = () => {
  const [view, setView] = useState(false);

  const [data, setData] = useState(translate);
  const [count, setCount] = useState(0);

  //Doldur boşalt kovaları, verileri data'ya yüklemeye yararlar.
  /*  const [english, setEnglish] = useState('');
    const [explanation, setExplanation] = useState('');
    const [example, setExample] = useState('');    */

  const [oneset, setOneset] = useState({
    english: "",
    explanation: "",
    example: "",
  });

  const skip = () => {
    setCount((prevCount) => {
      if (prevCount < data.length - 1) {
        return prevCount + 1;
      } else {
        return prevCount * 0;
      }
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setOneset({ ...oneset, [name]: value });
  };

  const kaydet = (e) => {
    e.preventDefault();
    if (oneset.english && oneset.example && oneset.explanation) {
      const newOneset = { ...oneset, id: new Date().getTime().toString() };
      setData([...data, newOneset]);
      setOneset({ english: "", explanation: "", example: "" });
    } else {
    }
  };

  /*  const ekle =(e)=>{
        e.preventDefault();
        if(english && explanation && example)
        {   //Doldurulan veriler obje içerisine paketlenir.
            const set = {english, explanation, example, id: new Date().getTime().toString()};

            //Paketli veriler Dataya yüklenir.
            setData([...data, set]);

            setEnglish('');
            setExplanation('');
            setExample('');

        }else{
            alert('Lütfen tüm boşlukları doldurduğunuza emin olun.');
        }

    }  */

  const randomSkip = () => {
    let rand = Math.floor(Math.random() * data.length);
    setCount(rand);
  };

  return (
    <div>
      <h1> {data[count].english} </h1>
      <h3> {data[count].explanation} </h3>
      <p> {data[count].example} </p>
      <button className="btn" onClick={skip}>
        {" "}
        Skip{" "}
      </button>
      <button className="btn" onClick={randomSkip}>
        {" "}
        Random Skip{" "}
      </button>
      <br></br>
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
                value={oneset.english}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="explanation">Explanation</label>
              <input
                type="text"
                name="explanation"
                id="explanation"
                value={oneset.explanation}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="example">Example</label>
              <input
                type="text"
                name="example"
                id="example"
                value={oneset.example}
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
