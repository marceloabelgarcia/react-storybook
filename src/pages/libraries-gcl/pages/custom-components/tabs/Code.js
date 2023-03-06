import React from 'react';

import LiveDemo from '@/components/LiveDemo';
const Code = (props) => {
  return (
    <div>
      <article>
        <h3>{props.title}</h3>
        <LiveDemo code={props.code}>{props.children}</LiveDemo>
      </article>
    </div>
  );
};
export default Code;
