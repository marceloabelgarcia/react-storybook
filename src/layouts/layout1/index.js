import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import './style.less';

const { Content } = Layout;

const Layout1 = () => {
  return (
    <div className="layout1">
      <Content className="main-wrapper">
        <section className="main-container">
          <Outlet />
        </section>
      </Content>
    </div>
  );
};
export default Layout1;
