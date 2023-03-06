const menu = [
  {
    label: 'Eurocontrol Design System',
    description:
      'Eurocontrol Design System is a dynamic collection of elements which helps designers and developers build the new generation of iNM digital products, continuing the path of digital transformation in European aviation. This storybook provides documentation about foundations, libraries and guidelines that contribute to creating a coherent and efficient ecosystem of applications.',
    to: '/eurocontrol-design-system',
    name: 'demo',
    layout: 'Layout1'
  },
  {
    label: 'Versioning System',
    to: '/versioning-system',
    name: 'versioning-system',
    layout: 'Layout1'
  },
  { label: 'Design principles', to: '/design-principles', name: 'design-principles', layout: 'Layout1' },
  {
    label: 'Foundations',
    to: '/foundations',
    name: 'foundations',
    layout: 'Layout2'
  },
  {
    label: 'Libraries',
    to: '/libraries',
    name: 'libraries',
    layout: 'Layout2',
    children: [
      { label: 'Global component libraries', to: '/libraries-global-component-libraries', name: 'libraries-gcl' },
      {
        label: 'Domain component libraries',
        to: '/libraries-domain-componet-libraries',
        name: 'libraries-dcl'
      }
    ]
  },
  { label: 'Patterns', to: '/patterns', name: 'patterns', layout: 'Layout2' }
];

export { menu };
