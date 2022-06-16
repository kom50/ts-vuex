// https://github.com/vuejs/vuex/issues/564
// Declare each action type
type ActionA = {
    type: 'A',
    value: number
}

type ActionB = {
    type: 'B',
    value: string
}

type sayHii = {
    type: 'sayHii',
    value: string
}


// Declare the union type of actions
type Action = ActionA | ActionB | sayHii

export default Action 