import React from 'react';
import { TitleBanner } from 'Inm/components';

import Markdown from 'markdown-to-jsx';

import GlobalLibraries from './components/GlobalLibraries';
import DomainLibraries from './components/DomainLibraries';
import Updates from './components/Updates';
import CustomTable from '@/components/CustomTable';
const PageContent = (props) => {
  const [markdown, setMarkdown] = React.useState('');

  const init = () => {
    setMarkdown(props.content);
  };
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className="page-content">
      <article>
        <Markdown
          options={{
            overrides: {
              GlobalLibraries: {
                component: GlobalLibraries
              },
              DomainLibraries: {
                component: DomainLibraries
              },
              Updates: {
                component: Updates
              },
              CustomTable: {
                component: CustomTable
              },
              titlebanner: {
                component: TitleBanner,
                props: {
                  title: 'otro titulo'
                }
              }
            }
          }}
        >
          {markdown}
        </Markdown>
      </article>
    </div>
  );
};
export default PageContent;
