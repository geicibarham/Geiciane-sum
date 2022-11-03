
import { React, useState } from 'react'
import axios from 'axios';
import './form.css'
const Form = () => {

    const [number1, setNumber1] = useState(Math.floor(Math.random() * 50))
    const [number2, setNumber2] = useState(Math.floor(Math.random() * 100))

    // const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return (
        <section className='form_container'>
            <p className=' numbers number1'>
            {number1} 
            </p>
            <p className='numbers number2'>
            {number2}
            </p>
           
          
        </section>
    )
}

export default Form;