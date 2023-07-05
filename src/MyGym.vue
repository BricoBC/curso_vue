<script setup>
    import {ref} from 'vue';

    let alert = ref(false)
    const sitiosAndPass = ref({
        title: "Passwords",
        siteWithPass: [],
        user : 'Brico',
        index: null
        })

    const addNewPlatform = () => {
        if(newSite.value !== '' && newPass.value !==''){
            sitiosAndPass.value.siteWithPass.push([newSite.value, newPass.value])
            newPass.value = '';
            newSite.value = '';
            alert.value = false
            updateData()
        }
        else{
            alert.value = true
        }
    }

    const newSite = ref('');
    const newPass = ref('');
    const modify = ref(false);

    const editarPlatfomr = (index) => {
        newSite.value = sitiosAndPass.value.siteWithPass[index][0];
        newPass.value = sitiosAndPass.value.siteWithPass[index][1];
        modify.value = true; 
        sitiosAndPass.value.index = index; 
        updateData()

    }

    const deleatePlatform = ( index ) => {
        sitiosAndPass.value.siteWithPass.splice(index, 1);
        updateData()

    }

    const changePassAndPlatform = () => {
        if(newSite.value !== '' && newPass.value !==''){
            sitiosAndPass.value.siteWithPass.splice(
                sitiosAndPass.value.index, 1, [newSite.value, newPass.value])
            newPass.value = '';
            newSite.value = '';
            alert.value = false;
            modify.value = false;
            updateData()

        }
        else{
            alert.value = true
        }
    }

    const loadData = () => {
        let datosDB = JSON.parse(localStorage.getItem('Administration-Passwords'));
        if(datosDB === null){
            sitiosAndPass.value.siteWithPass = null;
        }
        else{
            sitiosAndPass.value.siteWithPass = datosDB;
        }
    }
    loadData()

    const updateData = () => {
        localStorage.setItem('Administration-Passwords', JSON.stringify(sitiosAndPass.value));
    }
    
</script>

<template>
    <h1>{{ sitiosAndPass.title }} {{ sitiosAndPass.user }}'s</h1>
    <input v-model="newSite" type="text" placeholder="Site web">
    <input v-model="newPass" type="text" placeholder="Password" @keyup.enter="addNewPlatform">    
    <button v-show="!modify" @click="addNewPlatform" class="add">Agregar</button>
    <button v-show="modify" @click="changePassAndPlatform">Change</button>
    <p class="alertText" v-show="alert">Rellena ambos campos!</p>

    <section>
        <div class="backups" v-for="(site, index) in sitiosAndPass.siteWithPass">
            <p>{{site[0]}} : {{site[1]}}</p> 
            <section>
                <button @click="editarPlatfomr(index)">Modify</button>
                <button @click="deleatePlatform(index)" class="deleate">X</button>
            </section>
        </div>
        
    </section>
</template>

<style>
:root{
    --color-primary : rgb(38, 107, 163);
    --color-deleate : rgb(85, 4, 4);
    --btn-add: rgb(57, 107, 86);
}
*{
    margin: 5px;
}
.alertText{
    color:brown;
}
input{
    font-size: 14px;
    padding: 12px;
    border-radius: 8%;
}

input:focus, input[type]:focus{ 
    color: var(--color-primary);
    border-color: var(--btn-add);
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px var(--btn-add);
    outline: 0 none;
}
button{
    font-size: 12px;
    padding: 6px 8px;
    border-radius: 14%; 
    background-color:var(--color-primary);
    color: rgb(248, 248, 248);
    cursor: pointer;
}
.add{
    background-color:var(--btn-add);
}
.deleate{
    background-color:var( --color-deleate );
}
.backups{
    padding: 0  8px;
    color: rgb(248, 248, 248);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>