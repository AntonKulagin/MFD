import _ from 'lodash'

export function getSortItems(data, sort, sortName = 'name') {
  return _.orderBy(data, [sortName], [sort])
}
