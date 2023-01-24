import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    person: {

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
            // console.log(setPerson)
        }
    },
    addToBasketByPerson: (state, action) => {
        state.person.items =  //lo que sea que tenias mas lo nuevo que llegue x payload
            console.log(state.person.items)
    },
})

// Action creators are generated for each case reducer function
export const { setPerson, addToBasketByPerson } = splittedCheckSlice.actions

export const selectPerson = (state) => state.splittedCheck.person
export const selectPersonName = (state) => state.splittedCheck.person.tableMember

// export const selectBasketItemsByCostumer = (state, id) =>
//     state.splittedCheck.person.memberName.filter(item => item.id === id)


export default splittedCheckSlice.reducer