import React from 'react';
import './Homepage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bckImg from '../../Assets/bckgrndimg.svg';


const Homepage = () => {

    // const [user, setUser] = useState();
    
    // useEffect(() => {
    //     const getUserData = () => {
    //         try {
    //             axios
    //             .get('https://okigwecreations.online/api/')
    //             .then((result) => {
    //                     const singleUser = result;
    //                     console.log(singleUser);
    //                     // setUser(singleUser);
    //             })
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
        
    //     getUserData()
    // }, []);

  return (
    <>
        <div className='mainPage'>
            <div className='textpage'>
                <h2>Quick and Easy Loans for Your Financial Needs.</h2>
                <h4>
                    Our loan services offer a hassle-free and streamlined 
                    borrowing experience, providing you with the funds you 
                    need in a timely manner to meet your financial requirements.
                </h4>
                <div className='pagebutton'>
                    <button>Get all Loan Request</button>
                    <button>Get Repayment Schedule</button>
                </div>
            </div>
            <div className='textpage2'>
                <img src={bckImg} alt="homepage pic" />
            </div>
        </div>
    </>
  )
}

export default Homepage