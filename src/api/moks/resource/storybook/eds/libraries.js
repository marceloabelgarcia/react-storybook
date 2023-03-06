const global = [
  {
    title: 'Action Button',
    name: 'dl-ui-action-button',
    className: 'action-button',
    props: {
      class: 'dl-ui-action-button',
      icon: 'dl-ids-icon-user-single-outlined'
    },
    slots: [],
    path: '/storybook/storybook-components/action-button',
    image: 'https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg'
  },
  {
    title: 'Breadcrumb',
    name: 'dl-ui-breadcrumb',
    className: 'breadcrumb',
    props: {
      class: 'dl-ui-breadcrumb',
      homeIconConfig: {
        icon: 'dl-ui-icon-home',
        to: '/'
      },
      model: [
        {
          to: '#',
          item: 'Active'
        },
        {
          to: '#',
          item: 'Inactive'
        },
        {
          to: '#',
          item: 'Inactive'
        }
      ],
      separator: '/'
    },
    slots: [],
    path: '/storybook/storybook-components/breadcrumb',
    image: 'https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg'
  },
  {
    title: 'Button',
    name: 'dl-ui-button',
    className: 'button',
    props: {
      class: 'dl-ui-button'
    },
    slots: [],
    text: 'Default',
    path: '/storybook/storybook-components/button',
    image: 'https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg'
  },
  {
    title: 'Checkbox',
    multiple: [
      {
        name: 'dl-ui-checkbox',
        className: 'checkbox',
        props: {
          class: 'dl-ui-checkbox',
          value: false,
          name: 'unchecked'
        },
        slots: [],
        span: {
          position: 'after',
          className: 'label',
          text: 'Label'
        }
      },
      {
        name: 'dl-ui-checkbox',
        className: 'checkbox',
        props: {
          class: 'dl-ui-checkbox',
          value: true,
          name: 'checked'
        },
        slots: [],
        span: {
          position: 'after',
          className: 'label',
          text: 'Label'
        }
      },
      {
        name: 'dl-ui-checkbox',
        className: 'checkbox',
        props: {
          class: 'dl-ui-checkbox',
          indeterminate: true,
          value: true,
          icon: 'dl-ui-icon-check-mix',
          name: 'indeterminate'
        },
        slots: [],
        span: {
          position: 'after',
          className: 'label',
          text: 'Label'
        }
      }
    ],
    path: '/storybook/storybook-components/checkbox',
    image: 'https://gw.alipayobjects.com/zos/alicdn/8nbVbHEm_/CheckBox.svg'
  },
  {
    title: 'Chip',
    name: 'dl-ui-chip',
    className: 'chip',
    props: {
      class: 'dl-ui-chip',
      icon: 'dl-ui-icon-user',
      text: 'chip-text',
      value: 'value',
      stroke: true
    },
    slots: [],
    path: '/storybook/storybook-components/chip'
  },
  {
    title: 'Icon',
    name: 'dl-ui-icon',
    className: 'icon',
    props: {
      class: 'dl-ui-icon',
      id: 'dl-ids-icon-user-single-outlined'
    },
    slots: [],
    path: '/storybook/storybook-components/icon'
  },
  {
    title: 'Icons Set',
    multiple: [
      {
        name: 'dl-ui-icon',
        className: 'icon',
        props: {
          class: 'dl-ui-icon',
          id: 'dl-ids-icon-user-single-outlined'
        },
        slots: []
      },
      {
        name: 'dl-ui-icon',
        className: 'icon',
        props: {
          class: 'dl-ui-icon',
          id: 'dl-ids-icon-alerts-circle-filled'
        },
        slots: []
      },
      {
        name: 'dl-ui-icon',
        className: 'icon',
        props: {
          class: 'dl-ui-icon',
          id: 'dl-ids-icon-arrow_up_and_down-filled'
        },
        slots: []
      }
    ],
    path: '/storybook/storybook-components/icons-set'
  },
  {
    title: 'Input',
    multiple: [
      {
        name: 'dl-ui-input',
        className: 'input',
        props: {
          class: 'dl-ui-input',
          label: 'Label',
          rightIcon: 'dl-ui-icon-user',
          placeholder: 'Placeholder',
          disabled: true
        },
        slots: []
      },
      {
        name: 'dl-ui-input',
        className: 'input',
        props: {
          class: 'dl-ui-input',
          label: 'Label',
          rightIcon: 'dl-ui-icon-user',
          placeholder: 'Placeholder'
        },
        slots: []
      }
    ],
    path: '/storybook/storybook-components/input'
  }
];

const domain = [
  {
    title: 'Chip',
    name: 'dl-ui-chip',
    className: 'chip',
    props: {
      class: 'dl-ui-chip',
      icon: 'dl-ui-icon-user',
      text: 'chip-text',
      value: 'value',
      stroke: true
    },
    slots: [],
    path: '/storybook/storybook-components/chip'
  },
  {
    title: 'Icon',
    name: 'dl-ui-icon',
    className: 'icon',
    props: {
      class: 'dl-ui-icon',
      id: 'dl-ids-icon-user-single-outlined'
    },
    slots: [],
    path: '/storybook/storybook-components/icon'
  },
  {
    title: 'Icons Set',
    multiple: [
      {
        name: 'dl-ui-icon',
        className: 'icon',
        props: {
          class: 'dl-ui-icon',
          id: 'dl-ids-icon-user-single-outlined'
        },
        slots: []
      },
      {
        name: 'dl-ui-icon',
        className: 'icon',
        props: {
          class: 'dl-ui-icon',
          id: 'dl-ids-icon-alerts-circle-filled'
        },
        slots: []
      },
      {
        name: 'dl-ui-icon',
        className: 'icon',
        props: {
          class: 'dl-ui-icon',
          id: 'dl-ids-icon-arrow_up_and_down-filled'
        },
        slots: []
      }
    ],
    path: '/storybook/storybook-components/icons-set'
  },
  {
    title: 'Input',
    multiple: [
      {
        name: 'dl-ui-input',
        className: 'input',
        props: {
          class: 'dl-ui-input',
          label: 'Label',
          rightIcon: 'dl-ui-icon-user',
          placeholder: 'Placeholder',
          disabled: true
        },
        slots: []
      },
      {
        name: 'dl-ui-input',
        className: 'input',
        props: {
          class: 'dl-ui-input',
          label: 'Label',
          rightIcon: 'dl-ui-icon-user',
          placeholder: 'Placeholder'
        },
        slots: []
      }
    ],
    path: '/storybook/storybook-components/input'
  }
];

export default { global, domain };
