<template>
  <div class="grid grid-cols-12 gap-2 p-4 bg-red-200 rounded my-4">
    <t-input placeholder="Pesquise..." class="col-span-12 md:col-span-6 lg:col-span-4"/>
    <t-select class="col-span-3 lg:col-span-2" :options="disciplinasOpcoes" placeholder="Disciplinas"/>
    <t-select class="col-span-3 lg:col-span-2" :options="dificuldadeOpcoes" placeholder="Dificuldade"/>
    <t-select class="col-span-3 lg:col-span-2" :options="nivelOpcoes" placeholder="Nível"/>
    <t-select class="col-span-3 lg:col-span-2" :options="options" placeholder="Ano"/>

    <div class="col-span-12 flex justify-end">
      <t-button text="Filtrar"/>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      disciplinasOpcoes: ['Biologia', 'Química' ,'Física', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Português', 'Literatura', 'Língua Estrangeira', 'Artes', 'Educação Física'],
      dificuldadeOpcoes: ['Muito Fácil','Fácil', 'Médio', 'Díficil', 'Muito Díficil'],
      nivelOpcoes: ['Fundamental', 'Médio', 'Superior']
    }
  }
}
</script>