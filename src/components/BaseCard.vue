<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import BaseCardTitle from "@/components/BaseCardTitle.vue";
import BaseCardBody from "@/components/BaseCardBody.vue";


    defineProps({
        to: {
            type: Object,
            default: undefined,
        },
    });
</script>

<template>
    <RouterLink v-info="to" :to="to" class="block bg-white shadow p-4 roundedselect-none">

        <BaseCardTitle v-if="!!$slots.title">
            <slot name="title"> </slot>
        </BaseCardTitle>

        <BaseCardBody>
            <slot></slot>
        </BaseCardBody>

    </RouterLink>
</template>