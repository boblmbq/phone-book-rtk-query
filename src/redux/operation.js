import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6526deaa917d673fd76d23f6.mockapi.io/mycontact/',
  }),
  endpoints: build => ({
    getAllContacts: build.query({
      query: () => 'contacts',
    }),
    addContact: build.mutation({
      query(body) {
        return {
          url: 'contacts',
          method: 'POST',
          body,
        };
      },
    }),
    deleteContact: build.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
