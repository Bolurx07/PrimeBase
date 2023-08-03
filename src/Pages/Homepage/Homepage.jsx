import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Homepage = () => {

    const [user, setUser] = useState();
    
    useEffect(() => {
        const getUserData = () => {
            try {
                axios
                .get('https://api.postman.com/collections/17034879-eedd174f-d366-4d21-a137-38b5bce9d1e0?access_key=PMAT-01H6XA4YB57HM3C1F2A9Y0HTSG')
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