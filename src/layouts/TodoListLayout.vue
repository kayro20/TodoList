<template>
  <q-layout view="lHh Lpr lFf">
    <div class="absolute-center container q-pa-sm">
      <div class="wrapper">
        <div class="text-h2">TODO</div>

        <div v-if="darkMode">
          <img
            class="mode"
            src="~assets/todolist/icon-sun.svg"
            @click="toggleMode"
          >
        </div>
        <div v-else>
          <img
            class="mode"
            src="~assets/todolist/icon-moon.svg"
            @click="toggleMode"
          >
        </div>
      </div>

      <div>
        <InputTasks v-model="task" @keydown.enter="addTaskInTodoList(task)" />
      </div>

      <TodoCard>
        <div v-if="getList().length > 0">
          <div v-for="(currentTask, index) in getList()" :key="index">
            <ItemList :task="currentTask" />
          </div>
        </div>
        <div v-else>
          There are no todos!
        </div>

        <span>{{ itemsLeft }} item(s) left</span>
        <q-btn color="primary" flat label="All" @click="changeType('all')" />
        <q-btn color="primary" flat label="Active" @click="changeType('activeItems')" />
        <q-btn color="primary" flat label="Done" @click="changeType('doneItems')" />
      </TodoCard>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { useStore, mapActions, mapGetters } from 'vuex'

import InputTasks from 'components/Input.vue'
import TodoCard from 'components/Card.vue'
import ItemList from 'components/ItemList.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    InputTasks,
    ItemList,
    TodoCard
  },
  setup () {
    const $q = useQuasar()
    const $store = useStore()

    const isDarkMode = $store.state.mode.darkMode
    $q.dark.set(isDarkMode)

    const toggleMode = () => {
      $q.dark.toggle()
      $store.commit('mode/mutateMode', $q.dark.isActive)
    }

    return {
      toggleMode,
      store: $store
    }
  },
  data () {
    return {
      task: '',
      type: 'all'
    }
  },
  computed: {
    ...mapGetters('todo', ['all', 'activeItems', 'doneItems', 'itemsLeft']),
    ...mapGetters('mode', ['darkMode'])
  },
  methods: {
    ...mapActions('todo', ['addItem']),
    addTaskInTodoList (item) {
      this.task = ''
      this.addItem(item)
    },
    getList () {
      return this[this.type]
    },
    changeType (type) {
      this.type = type
    }
  }
})
</script>

<style lang="scss">
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
  font-family: "Josefin Sans", sans-serif;
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
