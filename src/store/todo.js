const state = {
  list: []
}

const getters = {
  all: state => state.list,
  doneItems: state => state.list.filter(item => item.checked),
  activeItems: state => state.list.filter(item => !item.checked),
  itemsLeft: state => state.list.filter(item => !item.checked).length
}

const mutations = {
  mutateList: (state, item) => {
    state.list.push(item)
    localStorage.setItem('userList', JSON.stringify(state.list))
  },

  mutateToggleItem: (state, item) => {
    const currentItem = state.list.find(itemList => itemList === item)
    currentItem.checked = !currentItem.checked
    localStorage.setItem('userList', JSON.stringify(state.list))
  },

  mutateUserList: (state, list) => {
    state.list = list
  },

  mutateClearList: (state) => {
    state.list = state.list.filter(item => !item.checked)
    localStorage.setItem('userList', JSON.stringify(state.list))
  }
}

const actions = {
  addItem: ({ commit }, item) => {
    const newItem = {
      label: item,
      checked: false,
      id: Date.now()
    }

    commit('mutateList', newItem)
  },

  toggleItem: ({ commit }, item) => {
    commit('mutateToggleItem', item)
  },

  setUserList: ({ commit }, list) => {
    commit('mutateUserList', list)
  },

  clearDoneItems: ({ commit }) => {
    commit('mutateClearList')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
