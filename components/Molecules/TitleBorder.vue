<template>
  <div class="border-b border-red-500">
    <h2
      class="
        text-2xl
        font-bold
        text-gray-700
        border-b-4 border-red-500
        inline-block
        py-1
        pr-2
      "
    >
      Disciplinas
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>