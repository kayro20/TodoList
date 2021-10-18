<template>
  <q-layout view="hHh lpR fFf">

  <div class="q-pa-sm fixed-center container">
    <div class="wrapper">
      <div class="text-h2">
        TODO
      </div>

      <div v-if="$q.dark.isActive">
        <img class="mode" @click="toggleMode" src="~assets/todolist/icon-sun.svg"/>
      </div>
      <div v-else>
        <img class="mode" @click="toggleMode" src="~assets/todolist/icon-moon.svg"/>
      </div>
    </div>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'TodoList',

  setup () {
    const $q = useQuasar()

    const toggleMode = () => {
      $q.dark.toggle()
      console.log($q.dark)
    }

    return {
      mode: $q,
      toggleMode
    }
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
.text-h2 {
    font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 10px;
    font-weight: 700;
    font-size: 2.5rem;
    color: $white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  min-width: 500px;
}

.mode {
  cursor: pointer;
}
</style>
