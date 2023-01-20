import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {

            state.items = [...state.items, action.payload] //lo que sea que tenias mas lo nuevo que llegue x payload
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)

            let newBasket = [...state.items]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {

                console.warn(`Product (id:${id}) cannot be removed. It's not yer in the basket`)
            }


            state.items = newBasket;
        },
        splitFromBasket: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            console.log(index)
            // let newBasket = [...state.items]
            // if (index >= 0) {
            //     newBasket.splice(index, 1)
            // } else {

            //     console.warn(`Product (id:${id}) cannot be removed. It's not yer in the basket`)
            // }


            // state.items = newBasket;
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsById = (state, id) =>
    state.basket.items.filter(item => item.id === id)

export const selectBasketTotal = state => state.basket.items.reduce((total, item) =>
    total += item.price, 0)
// export const selectBasketSplittedTotal = state => state.basket.items.reduce((total, item) =>
//     total += item.price, 0)
export default basketSlice.reducer