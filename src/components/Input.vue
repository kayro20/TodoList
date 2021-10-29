<template>
  <q-input
    v-model="text"
    borderless
    class="todo-input"
    :class="{ dark: store.state.mode.darkMode }"
    :input-style="{fontSize: '1.2rem', color: '#cacde8'}"
    placeholder="Create a new todo..."
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
  background-color: #FFF;
}
.todo-input.dark {
  background-color: $dark-gray;
}
</style>
