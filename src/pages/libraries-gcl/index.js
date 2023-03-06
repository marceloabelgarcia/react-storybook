import React from 'react';
import { useParams } from 'react-router-dom';

import Pages from './pages/';

const LibrariesGcl = () => {
  let { section } = useParams();

  if (!section) {
    section = 'overview';
  }
  const Page = Pages[section];

  return <Page />;
};
export default LibrariesGcl;
