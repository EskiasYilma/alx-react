export default function accessImmutableObject(object, array) {
  if (typeof object !== 'object' || array.length === 0) {
    return undefined;
  }

  const current = array[0];

  if (object.hasOwnProperty(current)) {
    if (array.length > 1) {
      return accessImmutableObject(object[current], array.slice(1));
    } else {
      return object[current];
    }
  } else {
    return undefined;
  }
}
