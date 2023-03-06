import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';

import StorybookIconSet from '@/components/Icons/StorybookIconSet';

import './style.less';

import Header from '@/components/Header';
// import Footer from '@/components/Footer';

import Transition from '@/components/Transition';
const Layout1 = (props) => {
  const [menu] = React.useState(props.menu ? props.menu : []);
  const [fadeIn, setFadeIn] = React.useState('');

  React.useEffect(() => {
    setFadeIn('fadeIn');
  }, []);
  return (
    <React.Fragment>
      <Layout className={`main-layout transition-route ${fadeIn}`}>
        <Header items={menu} />
        <Layout className="main-section">
          {props.loading && (
            <div className="page-loading">
              <Spin size="large" />
            </div>
          )}
          <Transition {...props} level={1} transitionStage={props.transitionStageLevel1}>
            {!props.loading && <Outlet />}
          </Transition>
        </Layout>

        <Layout.Footer></Layout.Footer>
      </Layout>
      <StorybookIconSet />
    </React.Fragment>
  );
};
export default Layout1;
