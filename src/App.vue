<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  beforeCreate () {
    const $store = useStore()
    const userMode = localStorage.getItem('darkMode') === 'true'
    const userList = JSON.parse(localStorage.getItem('userList'))

    userMode
      ? $store.commit('mode/mutateMode', userMode)
      : localStorage.setItem('darkMode', false)

    userList
      ? $store.commit('todo/mutateUserList', userList)
      : localStorage.setItem('userList', [])
  }
})
</script>
