import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { getSubMenu, menu, routerLayout1, routerLayout2 } from './menu';
import useRouteTransitions from '@/components/Transition/useRouteTransitions';
import Layouts from '../layouts/';
import Pages from './pages';

import '../utils/array/findDeep';

export default function MyRoutes() {
  const [subMenu, setSubMenu] = React.useState([]);
  const intervalTransition = async (params) => {
    const submenu = await getSubMenu(params, location);
    if (submenu) {
      setSubMenu(submenu);
    }
  };
  const transition = useRouteTransitions({
    stopped: (params) => {
      setTimeout(async () => {
        try {
          await intervalTransition(params);
        } catch (error) {
          console.log('error: ', error);
        }
        params.fadeIn(params.location);
      }, 600);
    }
  });

  return (
    <Routes location={transition.displayLocation}>
      <Route path="" element={<Layouts.Main {...transition} menu={menu} />}>
        <Route path="" element={<Layouts.Layout1 />}>
          <Route path="" element={<Pages name="home" />}></Route>
          {routerLayout1.map((route) => (
            <React.Fragment key={route.name}>
              <Route path={route.to} element={<Pages {...route} />}></Route>
            </React.Fragment>
          ))}
        </Route>

        <Route path="" element={<Layouts.Layout2 {...transition} menu={subMenu} />}>
          {routerLayout2.map((route) => (
            <React.Fragment key={route.name}>
              {route.children &&
                route.children.map((subroute) => (
                  <React.Fragment key={subroute.name}>
                    <Route path={subroute.to} element={<Pages name={subroute.name} />}>
                      <Route path={`:section`} element={<Pages name={subroute.name} />}></Route>
                    </Route>
                    <Route path={subroute.to} element={<Pages name={subroute.name} />}>
                      <Route path={`:section/:component`} element={<Pages name={subroute.name} />}></Route>
                    </Route>
                  </React.Fragment>
                ))}

              <Route path={route.to} element={<Pages name={route.name} />}>
                <Route path={`:section`} element={<Pages name={route.name} />}></Route>
              </Route>
            </React.Fragment>
          ))}
        </Route>
      </Route>
    </Routes>
  );
}
