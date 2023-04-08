import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import recipesReducer from '../features/recipes/recipesSlice'


 const store = configureStore({
    reducer: {
        auth: authReducer,
        recipe: recipesReducer
    },
})
export default store