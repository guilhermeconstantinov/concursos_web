<template>
  <div>
    <LandingPageHeader />

    <div class="flex justify-center space-x-10 bg-purple-500 py-5">
      <div class="bg-white rounded p-4 w-72">
        <h2 class="text-center text-2xl font-bold text-gray-700">Plano starter</h2>
        <img src="~/assets/img/estudante1.jpg" class="rounded-md my-2"/>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nisl et lectus ullamcorper elementum nec at diam. Nam tincidunt.</p>
        <t-button class="bg-blue-500 w-full mt-2 font-medium" text="VER MAIS"/>
      </div>

      <div class="bg-white rounded p-4 w-72">
        <h2 class="text-center text-2xl font-bold text-gray-700">Plano Profissional</h2>
        <img src="~/assets/img/estudante2.jpg" class="rounded-md my-2"/>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nisl et lectus ullamcorper elementum nec at diam. Nam tincidunt.</p>
        <t-button class="bg-blue-500 w-full mt-2 font-medium" text="VER MAIS"/>
      </div>

      <div class="bg-white rounded p-4 w-72">
        <h2 class="text-center text-2xl font-bold text-gray-700">Plano Ultra</h2>
        <img src="~/assets/img/estudante3.jpg" class="rounded-md my-2"/>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nisl et lectus ullamcorper elementum nec at diam. Nam tincidunt.</p>
        <t-button class="bg-blue-500 w-full mt-2 font-medium" text="VER MAIS"/>
      </div>
    </div>
  </div>
</template>

<script>
import LandingPageHeader from '@/components/Organisms/LandingPageHeader'
export default {
  components: { LandingPageHeader },
  auth: false,
  layout: 'landing-page',
}
</script>