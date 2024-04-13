import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, deleteContact, addContact } from './operations';
import { logOut } from '../auth/operations';

const slice = createSlice({
	name: 'contacts',

	initialState: {
		items: [],
		isLoading: false,
		error: false,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.items = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchContacts.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(addContact.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(addContact.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.isLoading = false;
			})
			.addCase(addContact.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(deleteContact.pending, state => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(deleteContact.fulfilled, (state, action) => {
				state.items = state.items.filter(item => item.id !== action.payload.id);
				state.isLoading = false;
			})
			.addCase(deleteContact.rejected, state => {
				state.error = true;
				state.isLoading = false;
			})
			.addCase(logOut.fulfilled, state => {
				state.items = [];
				state.error = false;
				state.isLoading = false;
			});
	},
});

export default slice.reducer;