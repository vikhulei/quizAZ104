import React, { useState } from "react";
import Card from "./Card";
import Questions from "./Questions";

const App = () => {
  const [question, setQuestion] = useState({
    q: "Start",
    a: "Press Next",
    tag: 0
  });
  const [category, setCategory] = useState("IdentitiesGovernance");
  const [flip, setFlip] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [prevQ, setPrevQ] = useState({});
  const [checked, setChecked] = useState(false);
  const [backCenter, setBackCenter] = useState(true)
  
  let newQuestions = Questions[category];

  const click_clear = () => {
    newQuestions.map((val) => (val.tag = 0));
    setQuestion({ q: "Start", a: "Press <br> Next", tag: 0 });
    setFlip(false);
    setBackCenter(true)
  };

  const click_category = (e) => {
    setCategory(e.target.value);
    click_clear();
  };

  const next = () => {
    setBackCenter(false)
    setChecked(false);
    newQuestions = newQuestions.filter((val) => val.tag === 0);
    if (newQuestions.length === 0) {
      setQuestion({ q: "End", a: "Press Clear", tag: 0 });
      setBackCenter(true)
    } else {
      if (repeat === true) {
        prevQ.tag = 0;
      }
      setFlip(false);
      let n = Math.floor(Math.random() * newQuestions.length);
      setQuestion(newQuestions[n]);
      newQuestions[n].tag = 1;
      setPrevQ(newQuestions[n]);
    }
    setRepeat(false);
  };

  return (
    <div className="wrapper">
      <div className="top_bar">
        <select name="category" id="category" onChange={click_category}>
          <option value='IdentitiesGovernance'>Identities & Governance</option>
          <option value='UserGroupAccounts'>User & Group Accounts</option>
        </select>
        <div className="repeat">
          <label>R</label>
          <input
            type="checkbox"
            name="repeat"
            checked={checked}
            onClick={() => setChecked(!checked)}
            onChange={(e) => setRepeat(e.target.checked)}
          ></input>
        </div>
      </div>
      <div className="main">
          <Card flip={flip} onFlipChange={setFlip} question={question} backCenter={backCenter} setBackCenter={setBackCenter}/>
        <button className="next" onClick={next}>
          <p>Next</p>
        </button>
      </div>
      <div className="clear_wrapper">
        <button className="clear_button" onClick={click_clear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;
