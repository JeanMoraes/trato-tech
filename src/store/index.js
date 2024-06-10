import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reduces/categories'
import itemsSlice from './reduces/items'
import cartSlice from './reduces/cart'
import searchSlice from './reduces/search'

const store = configureStore({
    reducer: {
        categories:categoriesSlice,
        items: itemsSlice,
        cart: cartSlice,
        search: searchSlice
    }
})

export default store