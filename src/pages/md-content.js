import React from 'react';

import { TitleBanner } from 'Inm/components';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';
import PageContent from '@/components/PageContent';

const MdContent = (props) => {
  return (
    <Page>
      <TitleBanner title={props.label}>{props.description}</TitleBanner>

      <ScrollPanel>
        <PageContent content={props.content} />
      </ScrollPanel>
    </Page>
  );
};
export default MdContent;
