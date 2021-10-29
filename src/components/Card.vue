<template>
  <q-card class="todo-card">
    <q-card-section class="card">
      <div class="column flex-start list">
        <slot name="list" />
      </div>

      <div class="footer items-center justify-between row">
        <slot name="footer" />
      </div>
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
  min-height: 10rem;
  margin-top: 16px;
}
.list {
  height: 24.5rem;
  overflow: auto;
}
.todo-card.q-dark {
  background-color: $dark-gray;
}
.card {
  padding:0;
}
.footer {
  padding: 1rem;
}
</style>
