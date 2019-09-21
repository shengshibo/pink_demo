import {RECEIVE_LIST, MOVIES_ARR} from './mutation-type'
export default {
  [RECEIVE_LIST] (state, {listData}) {
    state.listTmp = listData
  },
  [MOVIES_ARR] (state, {data}) {
    console.log('datasssss', data)
    state.moviesArr = data
  }
}
