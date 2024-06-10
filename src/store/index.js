import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reduces/categories'

const store = configureStore({
    reducer: {
        categories:categoriesSlice
    }
})

export default store