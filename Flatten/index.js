const input = {
  a: [1, [2, 3], { a: { b: 2 } }],
  b: {
    c: [4, [5]],
  },
};

// Expected
/*
{
  a: [1, 2, 3],
  c: [4, 5]
}
*/

function flatten(value) {
  if (typeof value !== 'object' || value === null) return value;

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray(value) {
  return value?.reduce((output, item) => {
    if (Array.isArray(item)) {
      output.push(...flatten(item));
    } else {
      output.push(flatten(item));
    }

    return output;
  }, []);
}

function flattenObject(value) {
  const output = {};

  for (const [key, item] of Object.entries(value)) {
    const flattenedItem = flatten(item);
    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      Object.assign(output, flattenedItem);
    } else {
      output[key] = flattenedItem;
    }
  }

  return output;
}

console.log(flatten(input));
