import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='myNav'>
        <div className='primebase'>
            <span className='prime'>Prime</span>
            <span className='base'>BASE</span>
        </div>
        <div className='mininav'>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
        </div>
        <button className='loanButton'>Request for Loan</button>

    </nav>
  )
}

export default Navbar