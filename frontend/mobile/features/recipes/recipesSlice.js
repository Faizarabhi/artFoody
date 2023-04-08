import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recipesService from './recipesService'

const initialState = {
  recipes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
export const getRecipes = createAsyncThunk(
    'recipes/getAll',
    async (_, thunkAPI) => {
        try { 
return await recipesService.getAllRecipes()
} catch (error) {
    const message =
    (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
  )
  export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      .addCase(getRecipes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recipes = action.payload
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      }) 
    },
    })
    export const { reset } = recipesSlice.actions 
export default recipesSlice.reducer
    