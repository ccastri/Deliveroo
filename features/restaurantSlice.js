import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
        long: null,
        lat: null,
    },
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.items

// export const selectBasketItemsById = (state, id) =>
//     state.restaurant.items.filter(item => item.id === id)

// export const selectBasketTotal = state => state.restaurant.items.reduce((total, item) =>
//     total += item.price, 0)
export default restaurantSlice.reducer