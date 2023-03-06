import * as antdComponents from 'antd';
import { components } from 'inm/export-components';

function getListAntdComponents() {
  const list = Object.entries(antdComponents).map(([label]) => ({
    label,
    to: `libraries-global-component-libraries/ant-design-components/${label}`
  }));

  return list;
}

function getListCustomComponents() {
  const list = components.map((item) => ({
    label: item.name,
    to: `libraries-global-component-libraries/custom-components/${item.name}`
  }));

  return list;
}

const foundations = [
  { label: 'Overview', to: 'foundations' },
  { label: 'Eurocontrol colours', to: `foundations/eurocontrol-colours` },
  { label: 'Light mode', to: `foundations/light-mode` },
  { label: 'Dark mode', to: `foundations/dark-mode` },
  { label: 'Layout', to: `foundations/layout` },
  { label: 'Typography', to: `foundations/typography` },
  { label: 'Iconography', to: `foundations/iconography` },
  { label: 'Content & writing', to: `foundations/content-writing` }
];
const librariesGcl = [
  { label: 'Overview', to: 'libraries-global-component-libraries' },
  {
    label: 'Ant Design components',
    to: `libraries-global-component-libraries/ant-design-components`,
    children: getListAntdComponents()
  },
  {
    label: 'Custom components',
    to: `libraries-global-component-libraries/custom-components`,
    children: getListCustomComponents()
  }
];

const librariesDcl = [
  { label: 'Overview', to: 'libraries-domain-componet-libraries' },
  { label: 'Flight components', to: `libraries-domain-componet-libraries/flight-components` },
  { label: 'Flow components', to: `libraries-domain-componet-libraries/flow-components` },
  { label: 'Data components', to: `libraries-domain-componet-libraries/data-components` },
  { label: 'User components', to: `libraries-domain-componet-libraries/u ser-components` }
];
export default { foundations, 'libraries-gcl': librariesGcl, 'libraries-dcl': librariesDcl };
