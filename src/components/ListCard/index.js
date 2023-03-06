import React from 'react';
import { Card, Empty, List, Skeleton } from 'antd';

import './style.less';

const ListCard = (props) => {
  return (
    <div>
      {!props.dataSource && <Skeleton active={true} />}
      {props.dataSource && (
        <List
          grid={{
            gutter: 48,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          dataSource={props.dataSource}
          renderItem={(item) => (
            <List.Item>
              <Card size="small" title={item.title} extra={<a href="#">Go to Figma</a>}>
                <div style={{ height: '180px' }} className="ListCard--item--body">
                  {item.image && <img src={item.image} />}
                  {!item.image && <Empty />}
                </div>
              </Card>
            </List.Item>
          )}
        ></List>
      )}
    </div>
  );
};
export default ListCard;
