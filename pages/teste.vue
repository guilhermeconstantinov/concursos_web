<template>
  <div class="space-y-4">
    <Filtros />

    <TitleBorder title="Disciplinas" />

    <div class="grid grid-cols-4 gap-4">
      <Materia label="Química" icon="quimica" />
      <Materia label="História" />
      <Materia label="Geográfia" />
      <Materia label="Inglês" />
      <Materia label="Matemática" icon="matematica" />
      <Materia label="Biologia" icon="biologia" />
    </div>
  </div>
</template>


<script>
// import Assunto from '@/components/Assunto/Assunto'
import Filtros from '@/components/Exercicios/Filtros'
import Materia from '@/components/Materia/Materia'
import TitleBorder from '@/components/Molecules/TitleBorder'
export default {
  components: { Filtros, Materia, TitleBorder },
}
</script>