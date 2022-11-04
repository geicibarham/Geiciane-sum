import { React, useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import plus from "../../assets/images/plus.png";
import equal from "../../assets/images/equal.png";
import submit from "../../assets/images/submit.png";
const Form = () => {
    const [number1, setNumber1] = useState(Math.floor(Math.random() * 50));
    const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));
    const [answer, setAnswer] = useState("");
    const [data, setData] = useState([]);
    const [correct, setCorrect] = useState("");
    const [feedback, setFeedback] = useState(false);
    const [score, setScore] = useState(0)
    const [scoreArr, setScorearr] = useState([])

    useEffect(() => {
        axios
            .get(`http://api.mathjs.org/v4/?expr=${number1}%2B${number2}`)
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

    console.log(number1 + number2);

    const checkAnswer = () => {
        if (data) {
            if (answer == data) {
                setCorrect("Correct");
                setFeedback("That's it! Great Job! 🥳");
                setScore(score + 5)
            }
            if (answer != data) {
                setCorrect("incorrect");
                setFeedback("Oops, that does not look right 😔");
            }
        }
        saveScores()
    };

    console.log(score)

    const saveScores = () => {

        let sc = score;
        console.log(sc + 2)
        let arr = []
        if (localStorage.getItem("score")) {
            arr = JSON.parse(localStorage.getItem("score"));
        }

        if (sc > 0) {
            arr.push(sc);
        }


        localStorage.setItem("score", JSON.stringify(arr));
        setScorearr(arr)
    }


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
            </section>
        </div>
    );
};

export default Form;
