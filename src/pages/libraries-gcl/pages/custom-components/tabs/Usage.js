import React from 'react';
import { TitleBanner } from 'Inm/components';

import Markdown from 'markdown-to-jsx';

const Usage = (props) => {
  const [markdown, setMarkdown] = React.useState('');

  const init = () => {
    setMarkdown(props.code);
  };
  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <article>
        <Markdown
          options={{
            overrides: {
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
export default Usage;
