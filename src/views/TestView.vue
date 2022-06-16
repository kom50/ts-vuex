<template>
    <div>
        <h1>Test</h1>
        <h4>count : {{ count }}</h4>
        <button @click="increment(45)"> count increment</button>

        <h1>Store data</h1>
        <h1>Store count : {{ $store.state.count }}</h1>
        <h1>Store count double : {{ $store.getters.double }}</h1>
        <h1>Store count : {{ $store.state.langCode }}</h1>
        <button @click="changeLangCode"> change lang code</button>
        <!-- <button @click="inc"> count</button> -->
        <h3>{{ double }}</h3>
        <hr>
        <child-view :count='count' name="Om" @click-me="callback"></child-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ChildView from "./ChildView.vue";
import { Point } from "../helpers/interfaces";
import Action from "../store/actionTypes";
import Mutation from "../store/mutationTypes";

export default defineComponent({
    name: 'TestView',
    components: { ChildView },
    data() {
        return {
            count: 0
        }
    },
    computed: {
        double(): number {
            return this.count * 2
        }
    },
    watch: {
        count(val) {
            console.log('this.count', this.count);
            console.log(val);
        }
    },
    mounted() {
        this.$store.state.count += 3
        // this.$store.commit<Mutation>({
        //     type: 'increment',
        //     value: 23
        // })
        this.$store.commit<Mutation>({
            type: 'add',
            value: 3
        })


        // console.log('state', this.$store);
        // console.log('state', this.$store._actions.addBork[0](454545));

        // console.log(this.$store.state.count += 3);
        console.log('this.$store', this.$store.state.isLoggedIn);


        console.log('double', this.$store.getters.double);

        // const a1: Action = Action
        console.log('Action');
        // Provide action type


        // this.$store.dispatch<Action>({
        //     type: 'B',
        //     value: '4'
        // })

        this.$store.dispatch('sayHii', 44444)

        this.$store.dispatch<Action>({
            type: 'sayHii',
            value: 'om'
        })

    },
    methods: {
        increment(val: number) {
            this.count += val;
            this.$store.commit<Mutation>({
                type: 'add',
                value: val
            })
        },
        callback(point: Point): void {
            console.log('callback');
            console.log(point);
        },
        changeLangCode() {
            this.$store.commit<Mutation>({
                type: 'setLangCode',
                value: 'en'
            })
        }
        // inc() {
        //     this.$store.commit<Mutation>({
        //         type: 'inc',
        //         value: 2
        //     })

        // }
    }
})
</script>

<style>
</style>