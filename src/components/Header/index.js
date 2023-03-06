import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { Input, Layout } from 'antd';

const { Header } = Layout;

import './style.less';

import Menu from '@/components/Menu';
import MainLogo from '@/components/MainLogo';

const HeaderAntd = (props) => {
  const navigate = useNavigate();

  const [params, setParams] = React.useState(null);

  const handleClickMenu = ({ to }) => {
    navigate(to);
  };
  const handleClickLogo = () => {
    setParams({ selectedKeys: null });
  };

  return (
    <Header className="antd-header" theme="light">
      <Link to="/" onClick={handleClickLogo} className="antd-header-logo">
        <MainLogo />
      </Link>
      <Menu
        className="antd-header-menu"
        {...params}
        mode="horizontal"
        items={props.items}
        defaultFunction={(item) => location.pathname.includes(item.to)}
        onClick={handleClickMenu}
      />
      <div className="antd-header__search">
        <Input.Search placeholder="Buscar" enterButton />
      </div>
    </Header>
  );
};
export default HeaderAntd;
