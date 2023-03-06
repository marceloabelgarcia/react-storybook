// prototype find to recursive nodes
const findDeep1 = (items, attr) => {
  let item = null;
  const findLoop = (children) => {
    if (children) {
      const itemFound = children.find((e) => {
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
      if (itemFound) {
        item = itemFound;
      }
    }
  };
  findLoop(items);

  return item;
};
// eslint-disable-next-line no-extend-native
Array.prototype.findDeep = function findDeep(attr) {
  return findDeep1(this, attr);
};
