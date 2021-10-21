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

    userMode
      ? $store.commit('mode/mutateMode', userMode)
      : localStorage.setItem('darkMode', false)
  }
})
</script>
