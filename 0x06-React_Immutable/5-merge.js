import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const merged = map1.concat(map2);
  return Map(page1).concat(Map(page2));
}
