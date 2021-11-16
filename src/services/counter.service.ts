/*Modify to add counter based methods*/
const onIncrement = (count: number): Number => {
    return count++
}

const onDecrement = (count: number): Number => {
    return count--
}

const onReset = (): Number => {
    return 0
}

export const counterService = { onIncrement, onDecrement, onReset }
