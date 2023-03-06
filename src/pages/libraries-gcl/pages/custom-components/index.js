import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { TitleBanner } from 'Inm/components';
import { Tabs } from 'antd';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';

import Usage from './tabs/Usage';
import Code from './tabs/Code';

import { components } from 'inm/export-components';

function getComponent(Item) {
  return (
    <Suspense>
      <Item.component />
    </Suspense>
  );
}

const UsageTab = (props) => {
  return <>{props.component && props.component.raw && <Usage code={props.component.raw.default} />}</>;
};
const CodeTab = (props) => {
  return (
    <>
      {props.component &&
        props.component.demos &&
        props.component.demos.map((item, index) => (
          <Code key={index} title={item.name} code={item.raw.default}>
            {getComponent(item)}
          </Code>
        ))}
    </>
  );
};
const CustomComponets = () => {
  const [component, setComponent] = React.useState(null);
  const params = useParams();

  const init = () => {
    setComponent(components.find((e) => e.name === params.component));
  };
  React.useEffect(() => {
    init();
  }, []);

  return (
    <Page>
      <TitleBanner title="Global component libraries">
        These components have a general and global scope, which means they must be used in every digital product across
        the iNM ecosystem.
      </TitleBanner>
      <ScrollPanel>
        <div className="page-content">
          <article>
            <h3>{component && component.name}</h3>

            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: `Usage`,
                  key: '1',
                  children: <UsageTab component={component} />
                },
                {
                  label: `Code`,
                  key: '2',
                  children: <CodeTab component={component} />
                }
              ]}
            />
          </article>
        </div>
      </ScrollPanel>
    </Page>
  );
};
export default CustomComponets;
