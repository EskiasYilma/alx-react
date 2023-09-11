const { fromJS } = require('immutable');

export default function getImmutableObject(inputObject) {
  const immutableMap = fromJS(inputObject);
  return immutableMap;
}
