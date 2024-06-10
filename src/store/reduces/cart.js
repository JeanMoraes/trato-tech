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
        },
        updateAmount: (state, { payload }) => {
            state = state.map(item => {
                if(item.id === payload.id) item.qtd += payload.amount
                return item
            })
        }
    }
})

export const { updateCart, updateAmount } = cartSlice.actions

export default cartSlice.reducer