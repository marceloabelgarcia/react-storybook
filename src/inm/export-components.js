import React from 'react';

function getComponents() {
  const objects = {};
  const pathComponents = require.context(`/src/inm/components/`, true, /\.js|.md?$/);
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

  const list = [];
  for (const [key, value] of Object.entries(objects)) {
    if (Object.entries(value).length > 0) {
      list.push({ name: key, value });
    }
  }
  function getDemos({ name, demos }) {
    const demosContent = [];
    for (const [value] of Object.entries(demos)) {
      demosContent.push({
        // eslint-disable-next-line global-require
        raw: require(`!!raw-loader!/src/inm/components/${name}/demos/${value}`),
        component: React.lazy(() => import(`/src/inm/components/${name}/demos/${value}`)),
        name
      });
    }
    return demosContent;
  }

  function getOK(allcomponents) {
    const componentsOk = allcomponents.map(({ name, value }) => {
      let demos;
      let raw;
      if (value.demos) {
        demos = getDemos({ name, demos: value.demos });
      }
      if (value['index.md']) {
        // eslint-disable-next-line global-require
        raw = require(`/src/inm/components/${name}/index.md`);
      }
      return {
        name,
        component: React.lazy(() => import(`/src/inm/components/${name}/`)),
        raw,
        demos
      };
    });
    return componentsOk;
  }

  const componentsOK = getOK(list);

  return componentsOK;
}

const components = getComponents();

export { components };
