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
  },
  {
    title: 'Link',
    key: 'link',
    dataIndex: 'link',
    type: 'link'
  }
];

const data = [
  {
    key: '1',
    icon: 'storybook-figmalogo',
    name: 'Header Banner - 29/09/2022',
    version: ['V 1.0.0'],
    link: { title: 'Change history', href: 'https://google.com?q=ant+design+header+banner' }
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
