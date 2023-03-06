import React from 'react';

import { TitleBanner } from 'Inm/components';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';

import updatesApi from '@/api/storybook/services/updates';

import CustomTable from '@/components/CustomTable';

const VersioningSystem = () => {
  const [updates, setUpdates] = React.useState({});

  const loadData = async () => {
    const res3 = await updatesApi.list();
    setTimeout(() => {
      setUpdates(res3.data);
    }, 2000);
  };
  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Page>
      <TitleBanner title="Versioning System">
        All notable changes of the project will be documented in this section. The information is divided between
        changes made in Figma (design team) or React JS (development team).
      </TitleBanner>

      <ScrollPanel>
        <div className="page-content">
          <article>
            <h3>Change history</h3>
            <CustomTable columns={updates.columns} dataSource={updates.data} />
          </article>
        </div>
      </ScrollPanel>
    </Page>
  );
};
export default VersioningSystem;
