import React from 'react';

import { Menu as MenuAntd } from 'antd';
let itemKey = 0;
const allItems = [];
const Menu = (props) => {
  const [items] = React.useState(props.items ? props.items : []);
  const [paramsMenu, setParamsMenu] = React.useState(null);
  const [mainItems, setMainItems] = React.useState(null);

  const getItems = (localItems, defaultFunction) => {
    if (localItems) {
      const items1 = localItems.map((item) => {
        itemKey++;

        allItems[itemKey] = item;

        if (defaultFunction(item)) {
          setParamsMenu({ selectedKeys: `${itemKey}` });
        }
        const itemMenu = {
          key: itemKey,
          label: item.label
        };

        if (item.children) {
          itemMenu.children = getItems(item.children, defaultFunction);
        }

        return itemMenu;
      });

      return items1;
    }
    return undefined;
  };
  React.useEffect(() => {
    if (props.defaultFunction) {
      setMainItems(getItems(items, props.defaultFunction));
    }
  }, [props.items, props.selectedKeys]);

  const handleClickMenu = (payload) => {
    const { key } = payload;

    if (props.onClick) {
      props.onClick({ ...payload, to: allItems[key].to });
    }
    setParamsMenu({ selectedKeys: `${key}` });
  };

  return (
    <MenuAntd
      className={props.className}
      style={props.style}
      {...paramsMenu}
      mode={props.mode}
      items={mainItems}
      onClick={handleClickMenu}
    />
  );
};
export default Menu;
