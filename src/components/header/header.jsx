import React from 'react';
import './header.css';

const Header = ({ dark,setDark }) => {
  const changeBg = () => {
    setDark(prev => !prev)
  }
  return (
    <div className={dark ? 'black header': 'header' }>
      <div className="header-list">
        <h1>Where in the world?</h1>
        <button onClick={changeBg}><i className="far fa-moon"></i> <span>Dark Mode</span></button>
      </div>
    </div>
  )
}

export default Header;