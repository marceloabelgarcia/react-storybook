import React from 'react';
import Icon from '@ant-design/icons';
const CustomIcon = (props) => {
  const SvgIcon = () => {
    return (
      <svg>
        <use xlinkHref={`#${props.id}`}></use>
      </svg>
    );
  };

  return (
    <div style={props.style} className={props.className}>
      <Icon style={{ display: 'inline-flex', width: '100%', height: '100%' }} component={SvgIcon} />
    </div>
  );
};
export default CustomIcon;
