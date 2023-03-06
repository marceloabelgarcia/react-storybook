// prototype find to recursive nodes
const findIndexDeep1 = (items, attr) => {
  let index = null;
  const findLoop = (children) => {
    if (children) {
      const indexFound = children.findIndex((e) => {
        if (typeof attr === 'function') {
          if (attr(e)) {
            return true;
          } else {
            findLoop(e.children);
            return false;
          }
        }
        return false;
      });
      if (indexFound > -1) {
        index = indexFound;
      }
    }
  };
  findLoop(items);

  return index;
};
// eslint-disable-next-line no-extend-native
Array.prototype.findIndexDeep = function findIndexDeep(attr) {
  return findIndexDeep1(this, attr);
};
