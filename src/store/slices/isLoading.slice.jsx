import { createSlice } from '@reduxjs/toolkit';

// Cambiamos isLoadingslice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isLoadingSlice = createSlice({
		name: 'isLoading',
    initialState: true,
    reducers: {
        setIsLoading: (state, action) => {
          return action.payload
        }
    }
})

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;