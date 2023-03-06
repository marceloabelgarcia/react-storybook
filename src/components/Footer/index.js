import React from 'react';

import './style.less';

const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <div>© EUROCONTROL 2022</div>
      <div className="footer__right">Ver. {process.env.REACT_APP_VERSION}</div>
    </div>
  );
};
export default Footer;
