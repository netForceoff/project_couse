import { configureStore, AnyAction, Middleware } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { StateSchema } from './schema'

const createStore = (initialState: StateSchema): ReturnType<typeof configureStore> => {
  return configureStore<StateSchema, AnyAction, ReadonlyArray<Middleware<string, StateSchema>>>({
    devTools: __IS_DEV__,
    reducer: {
      counter: counterReducer
    },
    preloadedState: initialState
  })
}

export default createStore