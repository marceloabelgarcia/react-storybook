import React from 'react';

import api from '@/api/storybook/services/eds/updates';

import CustomTable from '@/components/CustomTable';

const Updates = () => {
  const [table, setTable] = React.useState({});
  const loadData = async () => {
    const res1 = await api.list();

    setTimeout(() => {
      setTable(res1.data);
    }, 1000);
  };
  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <article>
      <h3>Recent updates</h3>
      <CustomTable columns={table.columns} dataSource={table.data} />
    </article>
  );
};
export default Updates;
