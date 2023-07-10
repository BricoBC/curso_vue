<script setup>
import {ref, computed} from 'vue';
import Fruts from './components/Fruts.vue';

const isModeNight = ref(true);

const listVerduras = ref([
  {
    name: 'Jitomate',
    cantidad: 0
  },
  {
    name: 'Cebolla',
    cantidad: 0
  },
  {
    name: 'Limón',
    cantidad: 0
  }
])

const mode = computed(() => {
 if(isModeNight.value){
  return [
    'background-color: var(--mode-oscuro)',
    'color: var(--text-md-oscuro)'
  ]
 }
 else{
  return [
    'background-color: var(--mode-claro);',
    'color: var(--text-md-claro)'
  ]
 }
})

const arrOrdenado = computed(() => {
  return listVerduras.value.sort((a,b) => b.cantidad - a.cantidad)
})

const changeMode = () => {
  isModeNight.value = !isModeNight.value
}

const reset = () => {
  for(let verdura of listVerduras.value){
    verdura.cantidad = 0;
  }
}

</script>

<template>
  <div class="body" :style="mode">
    <header>
      <button @click="changeMode">{{ isModeNight ? '🌑' : '🌞'}}</button>
      <Fruts title="Frutas & Verduras"></Fruts>
    </header>
  
    <ul v-for="verdura of arrOrdenado" :key="verdura.id">
      <li>{{ verdura.name }} {{ verdura.cantidad }}
        <button @click="[verdura.cantidad++]">+</button>
      </li>
    </ul>
    <button @click="reset">RESET</button>
  </div>
</template>

<style scoped>
  *{
    --claro-bg:  rgb(20, 86, 116);
    --oscuro-bg:  rgb(74, 155, 105);
    --mode-oscuro: rgb(29, 27, 27);
    --mode: rgb(255,255,255);
    --text-md-oscuro: rgb(255,255,255);
    --text-md-claro: rgb(29,29,29);
  }
  .body{
    height: 100vh;
  }
  ul{
    background-color: var(--oscuro-bg);
    margin: 4px;
    border-radius: 10px;
  }
  button{
    background-color: rgb(0,0,0,.09);
  }
</style>
