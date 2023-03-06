import React from 'react';

import { TitleBanner } from 'Inm/components';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';

import PageContent from '@/components/PageContent';

const Eds = (props) => {
  // eslint-disable-next-line global-require
  const raw = require(`/src/content/${props.name}/index.md`);
  return (
    <Page>
      <TitleBanner title={props.label}>{props.description}</TitleBanner>

      <ScrollPanel>
        <PageContent code={raw.default} />
      </ScrollPanel>
    </Page>
  );
};
export default Eds;
