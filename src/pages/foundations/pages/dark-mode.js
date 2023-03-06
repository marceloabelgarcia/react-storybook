import React from 'react';
import { TitleBanner } from 'Inm/components';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';

const DarkMode = () => {
  return (
    <Page>
      <TitleBanner title="Dark Mode">
        The fundamental design elements help us to create an unified product experience and ensure consistency and
        cohesion throughout the suite.
      </TitleBanner>
      <ScrollPanel>
        <div className="page-content">
          <article>
            <h2>DarkMode</h2>
            <p>
              Eurocontrol Design System is created in Figma. This section presents shortcuts to Figma files both for
              global libraries and domain libraries.
            </p>
          </article>
        </div>
      </ScrollPanel>
    </Page>
  );
};
export default DarkMode;
