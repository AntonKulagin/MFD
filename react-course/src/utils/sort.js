import _ from 'lodash'

export function getSortItems(data, sort, sortName = 'name') {
  if (!sort) return data
  return _.orderBy(data, [sortName], [sort])
}
