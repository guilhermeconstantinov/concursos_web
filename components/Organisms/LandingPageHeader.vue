<template>
  <div class="container px-5 py-10 flex flex-col md:flex-row items-center">
    <div class="w-5/6 md:w-3/6">
      <h1 class="font-bold text-4xl lg:text-5xl text-gray-700">
        Crie e simule com nossos planos de ensino personalizados
      </h1>
      <p class="text-lg mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div class="flex space-x-2 mt-6">
        <t-button variant="purple-border" class="w-full md:w-36">
          Simule
        </t-button>
        <t-button variant="purple" class="w-full md:w-36">Questões</t-button>
      </div>
    </div>

    <div class="flex-1 hidden md:block order-first md:order-last">
      <img src="~/assets/img/background_landing_page.png" class="h-full" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.background-landing {
  background-image: url('~/assets/img/background_landing_page.png');
  background-repeat: no-repeat;
  background-size: 570px;
  background-position: right center;
}
</style>