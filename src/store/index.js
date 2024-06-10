import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reduces/categories'
import itemsSlice from './reduces/items'
const store = configureStore({
    reducer: {
        categories:categoriesSlice,
        items: itemsSlice,
    }
})

export default store