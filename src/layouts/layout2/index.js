import React from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Spin } from 'antd';

import './style.less';
import Transition from '@/components/Transition';
import Menu from '@/components/Menu';

import '@/utils/array/findIndexDeep';

const { Content, Sider } = Layout;

const Layout2 = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [items, setItems] = React.useState(props.menu ? props.menu : []);
  const handleClickMenu = ({ to }) => {
    navigate(to);
  };
  React.useEffect(() => {
    if (Array.isArray(props.menu)) {
      setItems(props.menu);
    }
  }, [props.menu]);
  return (
    <React.Fragment>
      <div className="layout2">
        <Sider width={236} className="sider">
          <Menu
            className="antd-header-menu"
            items={items}
            defaultFunction={(item) => location.pathname.includes(item.to)}
            onClick={handleClickMenu}
          />
        </Sider>

        <Content className="main-wrapper">
          {props.loadingOutlet && (
            <div className="page-loading">
              <Spin size="large" />
            </div>
          )}
          <Transition {...props} level={2} transitionStage={props.transitionStageLevel2}>
            <section className="main-container">{!props.loadingOutlet && <Outlet />}</section>
          </Transition>
        </Content>
      </div>
    </React.Fragment>
  );
};
export default Layout2;
