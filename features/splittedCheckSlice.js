import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    person: {
        id: null,
        items: null,
        tip: null
    },
}

export const splittedCheckSlice = createSlice({
    name: 'splittedCheck',
    initialState,
    reducers: {
        setPerson: (state, action) => {
            state.person = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setPerson } = splittedCheckSlice.actions

export const selectPerson = (state) => state.splittedCheck.person

export default splittedCheckSlice.reducer