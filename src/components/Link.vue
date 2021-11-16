<template>
  <div>
    <div
      class="link text-body2"
      :class="{ active: active }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CustomLink',

  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss">
.link {
  cursor: pointer;
}
.text-body2 {
  font-size: .75rem;
  font-weight: 700;
  color: $gray;
  display: inline-block;
}
.text-body2.active {
  color: $blue;
}
</style>
