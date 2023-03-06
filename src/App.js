import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MyRoutes from './routes/';

import './styles/App.less';
import './styles/antd.less';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
