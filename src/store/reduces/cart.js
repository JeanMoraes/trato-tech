import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, { payload }) => {
            const hasItemInCart = state.some(item => item.id === payload)
            if(!hasItemInCart) {
                return [
                    ...state,
                    {
                        id: payload, 
                        qtd: 1
                    }
                ];
            }
            return state.filter(item => item.id !== payload)
        }
    }
})

export const { updateCart } = cartSlice.actions

export default cartSlice.reducer