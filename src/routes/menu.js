import apiMenu from '../api/storybook/services/menu';

import { menu } from '@/content/menu';

const routerLayout1 = menu.filter((item) => item.layout === 'Layout1');
const routerLayout2 = menu.filter((item) => item.layout === 'Layout2');

const findRouteItem = (params, location) => {
  const pathname = `/${location.pathname.split('/')[1]}`;
  let itemFound = routerLayout2.findDeep((e) => e.to === pathname);

  if (!itemFound) {
    let pathnamev = params.location.pathname.split('/');

    pathnamev = pathnamev.slice(0, pathnamev.length - 1);
    const pathnames = pathnamev.join('/');
    itemFound = routerLayout2.findDeep('to', pathnames);
  }
  return itemFound;
};
const getSubMenu = async (params, location) => {
  const itemFound = findRouteItem(params, location);
  if (itemFound) {
    const res = await apiMenu.getItems(itemFound.name);
    return res.data;
  }
  return null;
};
export { menu, routerLayout1, routerLayout2, getSubMenu };
