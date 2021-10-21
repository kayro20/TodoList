<template>
  <div class="q-gutter-sm">
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
      console.log(this.task)
    }
  }
}
</script>
