const flattenArray = (array) => {
  let maxDepth = 1;
  
  const countDepth = (arr, currentDepth) => {
    for (const element of arr) {
      if (Array.isArray(element)) {
        maxDepth = Math.max(maxDepth, currentDepth + 1);
        countDepth(element, currentDepth + 1);
      }
    }
  };

  countDepth(array, 1);
  return array.flat(maxDepth - 1);
};