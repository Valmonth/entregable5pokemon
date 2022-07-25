import { configureStore } from '@reduxjs/toolkit'
import trainerInputSlice from './slices/trainerInput.slice'

export default configureStore({
  reducer: {
      trainer: trainerInputSlice
	}
})