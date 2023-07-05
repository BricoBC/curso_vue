<script setup>
import {ref, computed} from 'vue'
const arrFrutas = ref([
  {name: 'Manzana', price: 30},
  {name: 'Pera', price: 33},
  {name: 'Platano', price: 31}
])
let nuevaFruta = ''
let nuevoPrecio = 0;
const showFruit = ( ) => {
  arrFrutas.value.push({name: nuevaFruta, price: nuevoPrecio}); nuevaFruta = ''; nuevoPrecio = 0;
}

const sumarPrecios = computed (() => {
  let total = 0;
  for (let frutas of arrFrutas.value) {
    total = total + frutas.price;
  }
  return total;
})
</script>

<template>
<h1>Añade tu fruta favorita</h1>
<ul>
  <li v-for="frutas of arrFrutas">{{frutas.name}} a ${{ frutas.price }} 
    <span v-if="frutas.price == 0 "> - No hay</span>
  </li>
</ul>
<input v-model="nuevaFruta" type="text" placeholder="Ingresa la fruta">
<input v-model.number="nuevoPrecio" type="text" placeholder="Ingresa el precio" @keyup.enter="showFruit">
<input type="button" value="Añadir" @click="showFruit">

<h3>Total: {{ sumarPrecios }}</h3>
</template>

<style>

</style>
