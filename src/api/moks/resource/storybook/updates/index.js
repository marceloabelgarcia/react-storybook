const columns = [
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
    type: 'icon'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Version',
    dataIndex: 'version',
    key: 'version',
    type: 'tags'
  }
];

const data = [
  {
    key: '1',
    icon: 'storybook-figmalogo',
    name: 'Header Banner - 29/09/2022',
    version: ['V 1.0.0'],
    description: '<p>Change Log<br />New<br />Change<br />Fix</p>'
  },
  {
    key: '2',
    icon: 'storybook-reactlogo',
    name: 'Button Loading - 1/09/2021',
    version: ['V 3.1.12'],
    link: { title: 'Change history', href: 'https://google.com?q=ant+design+button' }
  },
  {
    key: '3',
    icon: 'storybook-reactlogo',
    name: 'Scroll Panel - 9/08/2020',
    version: ['V 2.0.1'],
    link: { title: 'Change history', href: 'https://google.com?q=ant+design+scroll' }
  }
];

export default { columns, data };
