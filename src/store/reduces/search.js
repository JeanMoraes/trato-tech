import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleSearch: (state, { payload }) => payload,
        resetSearch: () => initialState
    }
})

export const { handleSearch, resetSearch } = searchSlice.actions
export default searchSlice.reducer