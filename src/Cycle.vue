<script>
export default {
  data() {
    return {
      title: 'Lifecycle',
      text: '',
      n: 0
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
    this.title = 'beforeCreate';
  },
  created(){
    //Se ejecuta cuando ya lee los datos, metodos, etc.
    this.title = 'create';
    console.log('created')
  },
  beforeMount(){
    //Antes de insertar los datos en el DOM.
    console.log('beforeMount')
    this.title = 'beforeMount';
  },
  mounted(){
    //Cuando se actualiza los valores de las dobles llaves
    console.log('mounted')
    this.title = 'mounted';
  },
  beforeUpdate(){
    //Al detectar un cambio
    console.log('beforeUpdate')
    this.title = 'beforeUpdate';
  },
  update(){
    //Al realizar cambios.
    console.log('updates')
    this.title = 'update';
  },
  beforeUnmount(){
    this.title = 'beforeUnmount';
    console.log('beforeUnmount')
  },
  unmounted(){
    this.title = 'unmounted';
    console.log('unmounted')
  }
}
</script>

<template>
    <h2>    
        {{ n }}
    </h2>
    <button @click="n++"></button>
    <h3>{{ title }}</h3>
    <input type="text" v-model="text">
    <p> {{ text }} </p>

    

</template>

<style>

</style>