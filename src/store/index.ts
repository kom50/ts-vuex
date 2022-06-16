// store.ts
// import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, MutationTree, } from 'vuex'

import Action from './actionTypes'
import Mutation from './mutationTypes'

export interface State {
  count: number
  name?: string
  isLoggedIn?: boolean,
  langCode: string
}


// export const key: InjectionKey<Store<State>> = Symbol()

const mutations = <MutationTree<State>>{
  add(state, payload: Mutation) {
    console.log('add', payload);
    if (typeof payload.value == 'number')
      state.count += payload.value;
  },
  setLangCode(state, payload: Mutation) {
    console.log('setLangCode', payload);
    typeof payload.value == 'string' && (state.langCode = payload.value)
  }
};


export const store = createStore({
  state: {
    count: 1,
    name: 'Om',
    langCode: 'en'
  },
  // mutations: {
  //   add(state, payload: number) {
  //     state.count += payload
  //     console.log(state, payload);
  //   },
  //   A(state: State, payload: Mutation) {
  //     console.log('Mutation');
  //     console.log('Mutation', payload);
  //   },
  //   inc(state, payload: Mutation) {
  //     console.log('increment');
  //     console.log('Mutation', payload);
  //     // state.count += payload.value
  //   },
  //   increment(state, payload: Mutation) {
  //     console.log('increment', payload);
  //     if (typeof payload.value == 'number')
  //       state.count += payload.value
  //   },
  //   getLangCode(state, payload: Mutation) {
  //     console.log('getlangCode', state);
  //     console.log('getlangCode', payload);
  //   }
  // },
  mutations: mutations,
  getters: {
    double(state: State): number {
      return state.count * 2
    }
  },
  actions: {
    sayHii({ state }, payload: Action) {
      console.log('sayHii');
      console.log('Hii ', payload);
      // state.count += 3
    },
    A(context, payload: Action) {
      console.log('A');
      console.log(payload.value);
    },
    B(context, payload: Action) {
      console.log('B');
      console.log(payload.value);
    }
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore()
}
