<template>
  <component :is="icons[icon]" v-if="icons[icon]" />
</template>

<script>
import icons from '@/config/icons'

export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      icons
    }
  }
}
</script>
