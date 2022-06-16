// vue.d.ts 
import axios from 'axios'
// import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // provide typings for `this.$axios`
    interface ComponentCustomProperties {
        // $store: Store;
        $http: typeof axios
        sayHello: string = "Hello";
    }

    type sayHii = {
        type: 'sayHii',
        value: string
    }
}

export { }  // Important! See note.
