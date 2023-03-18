import React from 'react';
import './Header.css'
import ABClogo from './ABC.svg'
import HRClogo from './HRC.svg'
  function Header() {
  return <div className='headerhrc'>
    <div className='logos'>
        <img src={ABClogo} width='275' height='40' className="abcimg"/>
        <img src={HRClogo} width='185' height='40' className="hrcimg"/>            
    </div>
    <div className="titlehrc">
      Invoice List
    </div>
  </div>
}
export default Header;