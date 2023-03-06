import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const LiveDemo = (props) => {
  return (
    <div>
      {props.children}
      <div style={{ width: '60vw', overflow: 'auto' }}>
        <h6>Code: </h6>
        <SyntaxHighlighter customStyle={{ height: 'auto' }} language="typescript" style={a11yDark}>
          {props.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default LiveDemo;
