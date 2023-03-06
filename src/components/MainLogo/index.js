import React from 'react';

import CustomIcon from '../Icons/CustomIcon';
import './style.less';

const MainLogo = () => {
  return (
    <div className="main-logo">
      <CustomIcon id="storybook-figmalogo" style={{ width: '44px', height: '44px' }} />
      <span>Demo Storybook</span>
    </div>
  );
};
export default MainLogo;
