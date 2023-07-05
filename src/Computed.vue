<script setup>
    import {ref, computed} from 'vue';

        const data = ref({
            i : 0
        })

        const color = computed ( () => {
            if(data.value.i < 10)
                return 'background: green';
            if (data.value.i <= 20)
                return 'background: yellow';
            if(data.value.i > 20)
                return 'background: red'
        })
</script>

<template>
    <h2>    
        {{ data.i }}
    </h2>
    <button @click="data.i++">+</button>
    <button @click=" data.i > 0 ? data.i--: 0">-</button>
    <div class="progress">
        <div class="progress-bar" 
        :style="['width:'+ data.i +'%', color]" >
            <span class="progress-bar-text">{{ data.i }}</span>
        </div>
    </div>

</template>

<style>
.progress {
    height: 40px;
    width: 100%;
    border: 1px solid #428bca;
    border-radius: 5px;
    background-color: #e6f3fa;
}
.progress-bar {
    height: 85%;
    background: #428bca;
    display: flex;
    align-items: center;
    transition: width 0.25s;
    border-radius: 5px;
}
.progress-bar-text {
    margin-left: 10px;
    font-weight: bold;
    color: #cce7f5;
}
</style>