<template>
<div>HELLO VUE WORLD</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'TodoList',

  setup () {
    const $q = useQuasar()
    console.log($q.dark.set(false))
  }
})
</script>

<style lang='scss'>
body.body--dark {
  background-image: url("~assets/todolist/bg-desktop-dark.jpg");
  background-repeat: repeat-x;
}
body.body--light {
  background-image: url("~assets/todolist/bg-desktop-light.jpg");
  background-repeat: repeat-x;
  background-color: $light;
}
</style>
