import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './slices/mainSlice'
import {setupListeners} from '@reduxjs/toolkit/query'
import {usersApi} from '../api/users'
const rootReducer = {
    main: mainReducer,
    [usersApi.reducerPath]:usersApi.reducer
}
const store = configureStore({
        reducer: rootReducer,
    middleware:(getDefaultMiddiware)=>getDefaultMiddiware().concat(usersApi.middleware),
    },
)
export default store
setupListeners(store.dispatch)