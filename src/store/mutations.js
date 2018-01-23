import * as types from './mutation-types'

const mutations = {
  [types.SET_TAG](state, tagName){
    state.tagName = tagName
  }
}

export default mutations;