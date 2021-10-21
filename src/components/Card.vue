<template>
  <q-card class="todo-card">
    <q-card-section>
      <slot />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoCard'
})
</script>

<style lang="scss">
.todo-card {
  margin-top: 16px;
  min-height: 400px;
  background-color: $dark-gray;
}
</style>
