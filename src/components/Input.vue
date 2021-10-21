<template>
  <q-input
    v-model="text"
    borderless
    class="todo-input"
    :class="{ dark: store.state.mode.darkMode }"
  >
    <template #prepend>
      <div class="circle" />
    </template>
  </q-input>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'InputTasks',

  setup () {
    const $store = useStore()

    return {
      store: $store,
      text: ref('')
    }
  }
})
</script>

<style lang="scss">
.todo-input {
  border-radius: 5px;
  padding-left: 20px;
}
.todo-input.dark {
  background-color: $dark-gray;
}
</style>
