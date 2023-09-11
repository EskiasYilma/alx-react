import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const merged = mergeDeep(map1, map2);
  return List(merged.values());
}
