//https://vuex.vuejs.org/guide/mutations.html#object-style-commit

type MutationA = {
    type: 'A',
    value: number
}

type MutationB = {
    type: 'inc',
    value: number
}

type LangCode = "en" | "hi"


type MutationC = {
    type: 'setLangCode',
    value: LangCode
}

type MutationD = {
    type: 'increment',
    value: number
}

type MutationE = {
    type: 'add',
    value: number
}


type Mutation = MutationA | MutationB | MutationC | MutationD | MutationE

export default Mutation

export { LangCode }