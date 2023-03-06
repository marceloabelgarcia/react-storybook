import React from 'react';

import './style.less';
const ScrollPanel = (props) => {
  const scroll = React.useRef('scroll');
  let element;
  const init = () => {
    if (element) {
      const rectElement = element.getBoundingClientRect();
      let heightParent = 600;
      element.style.height = 0;

      const parent = document.getElementsByClassName('page');

      if (parent?.length > 0) {
        const reactParent = parent[0].getBoundingClientRect();
        heightParent = reactParent.height + reactParent.top;
      }
      const heightScroll = heightParent - rectElement.top;
      element.style.height = `${heightScroll}px`;
    }
  };
  React.useEffect(() => {
    element = scroll.current;
    window.addEventListener('resize', init);
    init();
  }, []);
  return (
    <div ref={scroll} className="scroll-content">
      <div>{props.children}</div>
    </div>
  );
};
export default ScrollPanel;
