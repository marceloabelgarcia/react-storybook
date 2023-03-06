import React from 'react';
import Home from '../pages/home/';

import Foundations from '../pages/foundations/';
import LibrariesGcl from '../pages/libraries-gcl/';
import LibrariesDcl from '../pages/libraries-dcl/';
import Page404 from '../pages/page404';
import MdContent from '../pages/md-content';

const allpages = {
  'md-content': MdContent,
  home: Home,
  foundations: Foundations,
  'libraries-gcl': LibrariesGcl,
  'libraries-dcl': LibrariesDcl
};
const objects = {};
const pathComponents = require.context(`/src/content/`, true, /\.md?$/);
pathComponents.keys().forEach((fileName) => {
  const fileNameArray = fileName.split('/');
  const n = fileNameArray.length;
  let objAdded = objects;
  for (let i = 1; i < n; i++) {
    const key = fileNameArray[i];
    if (key !== '') {
      if (!objAdded[key]) {
        objAdded[key] = {};
      }
      objAdded = objAdded[key];
    }
  }
});
Object.entries(objects).forEach(([key]) => {
  // eslint-disable-next-line global-require
  const raw = require(`/src/content/${key}/index.md`);
  objects[key].raw = raw.default;
});
const Pages = (props) => {
  if (allpages[props.name]) {
    const Page = allpages[props.name];
    return <Page {...props} />;
  }
  if (objects[props.name]) {
    return <MdContent {...props} content={objects[props.name].raw} />;
  }
  return <Page404 />;
};
export default Pages;
