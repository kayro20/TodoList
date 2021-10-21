const state = {
  darkMode: false
}

const getters = {
  darkMode: state => state.darkMode
}

const mutations = {
  mutateMode: (state, mode) => {
    state.darkMode = mode
  }
}

const actions = {
  toggleMode: ({ commit }, mode) => {
    commit('mutateMode', mode)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
