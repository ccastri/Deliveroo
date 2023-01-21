import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'
import splittedCheckReducer from './features/splittedCheckSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer,
        splittedCheck: splittedCheckReducer,
    },
})