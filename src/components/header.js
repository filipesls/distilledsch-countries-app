import React from 'react';
import { Link } from 'react-router-dom';

const Header = (backBtn) => {
  const checkBtn = backBtn.backBtn;
  return (
    <>
      <h1>Countries APP</h1>
      { checkBtn && <><Link to="/" className="back-button">&lt;&nbsp;BACK</Link><br /></>}
    </>
  );
}

export default Header;