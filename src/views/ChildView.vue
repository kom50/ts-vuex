<template>
    <div>
        child component
        <h1>count : {{ count }}</h1>
        <button @click="clickHandler"> click me</button>
    </div>
</template>

<script lang="ts">
import { Point } from "@/helpers/interfaces";
import { defineComponent } from "vue";


export default defineComponent({
    emits: {
        clickMe: (p: Point) => true
    },
    data() {
        return {

        }
    },
    created() {
        // this.$store.commit('add', 56);
    },
    props: {
        count: {
            type: Number
        }
    },
    methods: {
        clickHandler() {
            console.log(this.$emit('clickMe', { x: 34, y: 45 }))
        }
    }
})
</script>

<style>
</style>