// vuex.d.ts
import { Store } from 'vuex'
import { State } from '../src/store/index';

declare module '@vue/runtime-core' {
    // declare your own store states
    // provide typings for `this.$store`
    // interface State {
    //     count: number
    //     name?: string
    // } 
    interface ComponentCustomProperties {
        $store: Store<State>,

    }
}