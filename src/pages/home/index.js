import React from 'react';
import { TitleBanner } from 'Inm/components';
import { Card, Empty, List } from 'antd';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';
import libraries from '@/api/storybook/services/eds/libraries';

const Home = () => {
  const [libraryGlobal, setLibraryGlobal] = React.useState([]);

  React.useEffect(() => {
    libraries.globalLibraries().then((res) => {
      setLibraryGlobal(res.data);
    });
  }, []);

  return (
    <Page>
      <TitleBanner title="Home">Home</TitleBanner>
      <ScrollPanel>
        <div className="page-content">
          <article>
            <h2>Demo in Figma</h2>
            <p>
              Eurocontrol Design System is created in Figma. This section presents shortcuts to Figma files both for
              global libraries and domain libraries.
            </p>
          </article>

          <article>
            <h3>Global libraries </h3>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 3
              }}
              dataSource={libraryGlobal}
              renderItem={(item) => (
                <List.Item>
                  <Card size="small" title={item.title} extra={<a href="#">Go to Figma</a>}>
                    {item.image && <img src={item.image} />}
                    {!item.image && <Empty />}
                  </Card>
                </List.Item>
              )}
            ></List>
          </article>
        </div>
      </ScrollPanel>
    </Page>
  );
};
export default Home;
