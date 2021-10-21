const state = {
  list: []
}

const getters = {
  list: state => state.list
}

const mutations = {
  mutateList: (state, item) => {
    state.list.push(item)
  },

  mutateToggleItem: (state, item) => {
    const currentItem = state.list.find(itemList => itemList === item)
    currentItem.checked = !currentItem.checked
  }
}

const actions = {
  addItem: ({ commit }, item) => {
    const teste = {
      label: item,
      checked: false,
      id: Date.now()
    }
    console.log(teste)
    commit('mutateList', teste)
  },

  toggleItem: ({ commit }, item) => {
    commit('mutateToggleItem', item)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
