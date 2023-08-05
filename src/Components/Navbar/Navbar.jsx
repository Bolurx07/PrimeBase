import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='myNav'>
        <Link to="/">
            <div className='primebase'>
                <span className='prime'>Prime</span>
                <span className='base'>BASE</span>
            </div>
        </Link> 
        <div className='mininav'>
           <Link to="/"><p className='home'>Home</p></Link> 
            <p>About Us</p>
            <p>Contact Us</p>
        </div>
        <Link to="/Request"><button className='loanButton'>Request for Loan</button></Link>

    </nav>
  )
}

export default Navbar