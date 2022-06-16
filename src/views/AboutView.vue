<template>
  <div class="about">
    <h1 @click="increment">This is an about page : {{ count }}, {{ double }}</h1>
    <h3>store count : {{ store.state.count }}</h3>
  </div>
</template>


<script lang='ts' setup>
import { useStore } from '../store/index'
import { ref } from "@vue/reactivity";
import { computed, onMounted } from '@vue/runtime-core';


const store = useStore()

console.log(store);

const count = ref(0)

const double = computed((): number => count.value * 2)

const arr: number[] = [1, 2, 3];

console.log(arr);
arr.push(22)
console.log(arr);

let a = null;
console.log(a);

const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

//tuples

const tuple1: [string, string, number] = ['30', '3', 3];

console.log(tuple1);

// object in typescript

const obj: { name: string, age: number, vill?: string } = {
  name: 'om',
  age: 23
}

console.log(obj);
// enum
/**
 * @type {enum} 
 */
enum days {
  Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

console.log(days);
console.log(days[2]);
console.log(days.Wed);

enum arrows {
  left = 37, top, right, bottom
}
console.log(arrows);

//type 
type Lang = 'en' | 'hi'
const lang: Lang = 'hi'
console.log(lang);

// interface

interface Point {
  x: number,
  y: number
}

const point: Point = { y: 23, x: 3 }
console.log(point);

const a1 = 23
console.log(a1);

/** 
 * @property z{number} 
 */
interface Point1 extends Point {
  z?: number;

}
let x1: Point1 = { z: 3, y: 4, x: 3 }
console.log(x1);

class A implements Point1 {
  x = 34;
  y = 54;
}
/**
 * @type {A} 
 */
const a2 = new A()

console.log('a2', x1.z);

//
function add(a?: number | null) {

  console.log(a!.toFixed());
}

add(3.34)
// add()



/*  */

/**
 * function to increment count value by 1 
 */
const increment = (event: Event) => {
  console.log(event.target);
  count.value += 2
  console.log(store.state.count += 2);
  store.commit('add', 34)

  console.log(double.value);

  // store.commit.add(4)

}

// increment(2)

onMounted(() => {
  console.log('object');

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    console.log(event);
    console.log(event.keyCode);
  })
})
</script>

