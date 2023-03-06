import React from 'react';

import api from '@/api/storybook/services/eds/libraries';

import ListCard from '@/components/ListCard';

const GlobalLibraries = () => {
  const [list, setList] = React.useState(null);
  const loadData = async () => {
    const res1 = await api.domainLibraries();

    setTimeout(() => {
      setList(res1.data);
    }, 1000);
  };
  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <article>
      <h3>Domain libraries</h3>
      <ListCard dataSource={list} />
    </article>
  );
};
export default GlobalLibraries;
