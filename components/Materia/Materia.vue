<template>
  <t-button variant="materia" class="px-3 py-4 transform hover:scale-105">
    <Icon
      v-if="icon"
      :icon="icon"
      class="opacity-30 w-12 h-12 absolute left-1"
    />
    <div class="text-right text-xl font-bold">
      {{ label }}
    </div>
  </t-button>
</template>


<script>
import Icon from '@/components/Atoms/Icon'
export default {
  components: { Icon },
  props: {
    label: {
      type: String,
      default: 'sem títutlo',
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
