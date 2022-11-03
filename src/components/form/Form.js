import { React, useState, useEffect } from "react";
import axios from "axios";
import "./form.css";
import plus from "../../assets/images/plus.png";
import equal from "../../assets/images/equal.png";
const Form = () => {
    const [number1, setNumber1] = useState(Math.floor(Math.random() * 50));
    const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));
    const [answer, setAnswer] = useState("");
    const [data, setData] = useState([]);
    const [numbertoCheck, setNumber] = useState(0)

    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // console.log(number1 + number2)

    useEffect(() => { }, [number1, number2]);

    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setAnswer(e.target.value);
       setNumber(answer)
        getApiresult();
    };

    console.log(number1 + number2);
    const getApiresult = () => {
        axios
            .get(`http://api.mathjs.org/v4/?expr=${number1}%2B${number2}`)
            .then((res) => {
                setData(res.data);
            })
            .catch(console.error);
        checkAnswer()
    };


    const checkAnswer = () => {

        if (parseInt(numbertoCheck) ===data) {
            console.log("equal");
            console.log(typeof answer)
        }
        if ( (parseInt(numbertoCheck) !==data) ){
            console.log('not equal')
            
        }
       
    };
    // console.log(data);
    console.log(typeof numbertoCheck)
    return (
        <div className="form_outer_container">
            <section className="form_container">
                <form onSubmit={handleSubmit}>
                    <span className=" numbers number1">{number1}</span>

                    <img width="65px" src={plus} alt="plus sign" />
                    <span className="numbers number2">{number2}</span>
                    <img width="65px" src={equal} alt="equal sign" />
                    <input value={answer} onChange={handleChange} type="text" />
                    <button type="submit" className="comic sendButton">
                        SEND
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Form;
