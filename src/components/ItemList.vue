<template>
  <div class="item q-gutter-sm">
    <q-checkbox :label="task.label" :model-value="task.checked" @click="toggle" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      default: () => ({ })
    }
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    ...mapActions('todo', ['toggleItem']),
    toggle () {
      this.toggleItem(this.task)
    }
  }
}
</script>

<style lang="scss">
.item {
  padding: .7rem;
  border-bottom: solid 1px #777a92;
}
</style>
