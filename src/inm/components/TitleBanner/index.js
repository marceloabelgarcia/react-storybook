import React from 'react';
import './style.less';

const TitleBanner = (props) => {
  return (
    <div className="title-banner">
      <h1>{props.title}</h1>
      <p className="title-banner__paragraph">{props.children}</p>
    </div>
  );
};
export default TitleBanner;
