import React from 'react';
import './Request.css';
import { useState } from 'react';
import axios from 'axios';


const Request = () => {

    // const [loanRequest, setLoanRequest] = useState({
        
    // })

    
    
    // const handleInput = (e) => {
    //     setLoanRequest({...loanRequest, [e.target.key]: e.target.value})
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        // formData.append('key', 'full_');   //append the values with key, value pair
        // formData.append('loan_amount', 200000);
        // formData.append('repayment_loan', 20);


        const values = [...formData.entries()];
        console.log(values)
        // const isEmpty = values.includes('')

        // if (isEmpty){
        //     console.log('Provide all details');
        //     return;
        // }

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post('https://okigwecreations.online/api/', values, config)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="">Full Name</label>
            <input type='text'  name='full_name'></input>
            <br />
            <label htmlFor="">Loan Amount</label>
            <input type='text'  name='loan_amount'></input>
            <br />
            <label htmlFor="">Repayment Duration</label>
            <input type='text'  name='repayment_duration'></input>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Request