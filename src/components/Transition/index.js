import React from 'react';

const Transition = (props) => {
  const handleAnimation = () => {
    if (props.onAnimationEnd) {
      props.onAnimationEnd({ stage: props.transitionStage, level: props.level });
    }
  };
  return (
    <div className={`transition-route ${props.transitionStage}`} onAnimationEnd={handleAnimation}>
      {props.children}
    </div>
  );
};
export default Transition;
