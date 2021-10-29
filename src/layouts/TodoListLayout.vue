<template>
  <q-layout view="lhr Lpr lFr">
    <div class="container content-center full-width items-center justify-center row wrap">
      <div class="wrapper">
        <div class="col-xs-12 justify-between row">
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
        <div class="col-xs-12">
          <div>
            <InputTasks v-model="task" @keydown.enter="addTaskInTodoList(task)" />
          </div>
        </div>

        <div class="col-xs-12">
          <TodoCard>
            <template #list>
              <div v-if="getList().length > 0">
                <div v-for="(currentTask, index) in getList()" :key="index">
                  <ItemList :task="currentTask" />
                </div>
              </div>
              <div v-else class="text-body1">
                There are no todos!
              </div>
            </template>

            <template #footer>
              <div class="text-body2">{{ itemsLeft }} item(s) left</div>
              <div class="filter">
                <CustomLink :active="type === 'all'" @click="changeType('all')">
                  All
                </CustomLink>
                <CustomLink :active="type === 'activeItems'" @click="changeType('activeItems')">
                  Active
                </CustomLink>
                <CustomLink :active="type === 'doneItems'" @click="changeType('doneItems')">
                  Completed
                </CustomLink>
              </div>
              <CustomLink @click="clearDoneItems">
                Clear Completed
              </CustomLink>
            </template>
          </TodoCard>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { useStore, mapActions, mapGetters } from 'vuex'

import InputTasks from 'components/Input.vue'
import TodoCard from 'components/Card.vue'
import CustomLink from 'components/Link.vue'

export default defineComponent({
  name: 'TodoList',
  components: {
    InputTasks,
    CustomLink,
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
    ...mapActions('todo', ['addItem', 'clearDoneItems']),
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
  letter-spacing: 10px;
  font-weight: 700;
  font-size: 2.5rem;
  color: $white;
}
.text-body1 {
  margin: auto;
  font-size: 1.2rem;
  color: $gray;
}
.text-body2 {
  font-size: .75rem;
  font-weight: 700;
  color: $gray;
  display: inline-block;
}
.wrapper {
  padding: 2rem 1rem;
  width: 100%;
  max-width: 575px;
}
.mode {
  cursor: pointer;
}
.container {
  height: 100vh;
}
.filter {
  display: flex;
  .link {
    margin-right: 1rem;
  }
}
.q-checkbox__bg {
  border-radius: 10px;
  border: solid 1px #393a4c;
}
</style>
