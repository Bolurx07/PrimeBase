import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Homepage = () => {

    const [user, setUser] = useState();
    
    useEffect(() => {
        const getUserData = () => {
            try {
                axios
                .get('https://okigwecreations.online/api/')
                .then((result) => {
                        const singleUser = result;
                        console.log(singleUser);
                        // setUser(singleUser);
                })
            } catch (error) {
                console.log(error)
            }
        };
        
        getUserData()
    }, []);

  return (
    <div>
        <button>Request for Loan</button>
        <button>Get all Loan Request</button>
        <button>Get Repayment Schedule</button>
    </div>
  )
}

export default Homepage