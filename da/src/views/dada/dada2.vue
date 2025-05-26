<script setup>
    import {ref} from 'vue'

    const pol = ref('on')
    const click = () => {
        pol.value=pol.value==='on'? 'off' : 'on'
    }
</script>

<template>
    <button :class="pol==='on'? 'bg-amber-200': 'bg-amber-800'" @click="click">{{ pol }}</button>
</template>