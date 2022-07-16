<template>
  <t-button
    v-bind="$attrs"
    :variant="variant"
    :disabled="loading"
    @click="$emit('click')"
  >
    <span v-if="!loading">{{ text }}</span>
    <Icon v-else icon="spinner" class="h-6" />
  </t-button>
</template>

<script>
import Icon from '~/components/Atoms/Icon'
export default {
  components: { Icon },
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'blue',
    },
    text: {
      type: String,
      default: '',
    },
    loading: {
      type: [Boolean, String, Number],
      default: false,
    },
  },
}
</script>
