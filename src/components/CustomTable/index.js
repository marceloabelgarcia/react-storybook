import React from 'react';
import CustomIcon from '@/components/Icons/CustomIcon';
import { Skeleton, Table, Tag } from 'antd';

const CustomTable = (props) => {
  let columns = props.columns;
  let dataSource = props.dataSource;

  if (typeof props.columns === 'string') {
    columns = JSON.parse(props.columns);
  }
  if (typeof props.dataSource === 'string') {
    dataSource = JSON.parse(props.dataSource);
  }
  const getColumns = (cols) => {
    let to = [];
    if (Array.isArray(cols)) {
      to = cols.map((column) => {
        if (column?.type === 'tags') {
          const render = (_, { version }) => (
            <>
              {version.map((tag) => {
                return (
                  <Tag color="blue" key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          );

          column.render = render;
        }
        if (column?.type === 'icon') {
          const render = (_, { icon }) => <CustomIcon id={icon} style={{ width: '25px', height: '25px' }} />;

          column.render = render;
        }
        if (column?.type === 'link') {
          const render = (_, { link }) => (
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          );

          column.render = render;
        }
        return column;
      });
    }
    return to;
  };
  const getExpandible = () => {
    return {
      expandedRowRender: (record) => (
        <p dangerouslySetInnerHTML={{ __html: record.description }} style={{ margin: 0 }}></p>
      )
    };
  };
  return (
    <>
      {!dataSource && <Skeleton active={true} />}
      {dataSource && (
        <Table
          loading={props.loading ? props.loading : false}
          showHeader={props.showHeader ? props.showHeader : false}
          columns={getColumns(columns)}
          dataSource={dataSource}
          expandable={getExpandible()}
        />
      )}
    </>
  );
};
export default CustomTable;
