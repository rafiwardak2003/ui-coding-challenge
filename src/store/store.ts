import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { apiService } from "./apiService"

const rootReducer = combineSlices({
  [apiService.reducerPath]: apiService.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(apiService.middleware)
    },
    preloadedState,
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()
export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
