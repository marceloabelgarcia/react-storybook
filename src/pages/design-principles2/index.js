import React from 'react';
import { Skeleton } from 'antd';
import ScrollPanel from '@/components/ScrollPanel';
import Page from '@/components/Page';
import { TitleBanner } from 'Inm/components';
import designPrinciplesApi from '@/api/storybook/services/designPrinciples';
const DesignPrinciples = () => {
  const [designPrinciples, setDesignPrinciples] = React.useState({});
  const loadData = async () => {
    const res3 = await designPrinciplesApi.articles();
    setTimeout(() => {
      setDesignPrinciples(res3.data);
    }, 2000);
  };
  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <Page>
      <TitleBanner title="Design principles">
        The design principles are the fundamental rules on which the design of every HMI of the different Eurocontrol
        Digital Products is based. These guidelines serve to make designs homogeneous, pleasant and understandable for
        the users of the iNM ecosystem and must be applied by all the UX/UI designers involved in the creation of the
        products.
      </TitleBanner>

      <ScrollPanel>
        <div className="page-content">
          {!designPrinciples.articles && <Skeleton active={true} />}
          {designPrinciples.articles &&
            designPrinciples.articles.map((item, index) => (
              <article key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
        </div>
      </ScrollPanel>
    </Page>
  );
};
export default DesignPrinciples;
