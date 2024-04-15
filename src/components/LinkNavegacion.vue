<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        to: {
            type: String
        }
    })
</script>


<template>
    <RouterLink 
        :to="{name: to}"
        class="py-1 px-10 text-lg font-bold text-white"
    >
        <slot></slot>
    </RouterLink>
</template>
