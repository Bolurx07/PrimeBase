import React from 'react';
import './Request.css';
import { useState } from 'react';
import axios from 'axios';


const Request = () => {

    const [loanRequest, setLoanRequest] = useState({
        
    })

    
    
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
        .then((response) => { 
            const myRes = response; 
            setLoanRequest(myRes);}
        )
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h3 className='formHead'>Please fill your loan request</h3>
        <form onSubmit={handleSubmit} className='formDiv' >
            <label htmlFor="full_name">Full Name:</label>
            <input type='text' id='name' name='full_name'></input>
            <br />
            <br />
            <label htmlFor="loan_amount">Loan Amount:</label>
            <input type='text' id='loan' name='loan_amount'></input>
            <br />
            <br />
            <label htmlFor="repayment_duration">Repayment Duration:</label>
            <input type='text' id='duration' name='repayment_duration'></input>
            <br />
            <br />
            <button type='submit'>Submit</button>
            {loanRequest.statusText === "OK" ? <span className='err'>Form submitted</span> : <span className='err'>Input these fields</span>}
        </form>
    </div>
  )
}

export default Request