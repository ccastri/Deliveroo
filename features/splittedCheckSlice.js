import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    person: {
        tableMember: null,
        items: [],
        // tip: null

    },
}

export const splittedCheckSlice = createSlice({
    name: 'splittedCheck',
    initialState,
    reducers: {
        setPerson: (state, action) => {
            state.person = action.payload
        },
        addToBasketByPerson: (state, action) => {
            state.person.items = [...state.person.items, action.payload]//lo que sea que tenias mas lo nuevo que llegue x payload
        },
        removeFromPersonalBasket: (state, action) => {
            const index = state.person.items.findIndex(item => item.id === action.payload.id)
            let newBasket = [...state.person.items]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(`Product (id:${id}) cannot be removed. It's not yer in the basket`)
            }
            state.person.items = newBasket;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPerson, addToBasketByPerson, removeFromPersonalBasket } = splittedCheckSlice.actions

export const selectPerson = (state) => state.splittedCheck.person


export const selectBasketItemsByCostumer = (state, id) =>
    state.splittedCheck.person.items.filter(item => item.id === id)

export const selectBasketByPersonTotal = state => state.splittedCheck.person.items.reduce((total, item) =>
    total += item.price, 0)


export default splittedCheckSlice.reducer