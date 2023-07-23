import {combineReducers, configureStore} from "@reduxjs/toolkit"
import courseReducer from "./slices/CourseSlice"
import courseDetailReducer from "./slices/CourseDetailSlice"
import authReducer from "./slices/AuthSlice"

const rootReducer = combineReducers({
  courseReducer,
  authReducer,
  courseDetailReducer,
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]