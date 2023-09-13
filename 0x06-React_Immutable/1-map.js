import { Map } from 'immutable';

export default function getImmutableObject(inputObject) {
  const immutableMap = Map(inputObject);
  return immutableMap;
}
