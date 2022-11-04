import { React, useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import plus from "../../assets/images/plus.png";
import equal from "../../assets/images/equal.png";
import submit from "../../assets/images/submit.png";
import next from "../../assets/images/next.png";
const Form = () => {
  const [number1, setNumber1] = useState(Math.floor(Math.random() * 50));
  const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));
  const [answer, setAnswer] = useState("");
  const [data, setData] = useState([]);
  const [correct, setCorrect] = useState("");
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.mathjs.org/v4/?expr=${number1}%2B${number2}`)
      .then((res) => {
        setData(res.data);
      });
  }, [number1, number2, data]);

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
  };

  const checkAnswer = () => {
    if (data) {
      // eslint-disable-next-line eqeqeq
      if (answer == data) {
        setCorrect("Correct");
        setFeedback("That's it! Great Job! 🥳");
      }

      // eslint-disable-next-line eqeqeq
      if (answer != data) {
        setCorrect("incorrect");
        setFeedback("Oops, that does not look right 😔");
      }
    }
  };

  const restartGame = () => {
    setNumber1(Math.floor(Math.random() * 50));
    setNumber2(Math.floor(Math.random() * 100));
    setCorrect("");
    setAnswer("");
    setFeedback("");
  };
  return (
    <div className="form_outer_container">
      <section className={`form_container ${correct}`}>
        <form onSubmit={handleSubmit}>
          <span className=" numbers number1">{number1}</span>

          <img width="65px" src={plus} alt="plus sign" />
          <span className="numbers number2">{number2}</span>
          <img width="65px" src={equal} alt="equal sign" />
          <input value={answer} onChange={handleChange} type="number" />
          <button type="submit" className="comic sendButton">
            SEND
            <img width="25px" src={submit} alt="submit icon" />
          </button>
        </form>
        <h3>{feedback && feedback}</h3>
        <button className="comic restartButton" onClick={restartGame}>
          NEXT
          <img width="30px" src={next} alt=" restart icon" />
        </button>
      </section>
    </div>
  );
};

export default Form;
