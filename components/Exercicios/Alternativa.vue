<template>
  <t-button variant="blank" class="flex" @click="$emit('input', label)">
    <t-button :variant="value === label ? 'alternative-active' : 'alternative'">
      {{ label }}
    </t-button>
    <p class="ml-4 text-left">
      {{ content }}
    </p>
  </t-button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>