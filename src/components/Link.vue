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
        class="py-2 px-10 text-xl font-sans text-purple-600"
    >
        <slot></slot>
    </RouterLink>
</template>
