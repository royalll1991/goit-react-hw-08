
import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, nameFilter) => {
		return contacts.filter(
			contact =>
				contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
				contact.number.includes(nameFilter)
		);
	}
);