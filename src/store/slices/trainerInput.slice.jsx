import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerInput = createSlice({
		name: 'trainer',
    initialState: "",
    reducers: {
        trainerName: (state, action) =>{
            return action.payload
        }
    }
})

export const { trainerName } = trainerInput.actions;

export default trainerInput.reducer;