// Importing necessary functions from Redux Toolkit
import { 
    createSelector,
    createEntityAdapter 
} from "@reduxjs/toolkit";

// Importing the main apiSlice from another module
import { apiSlice } from "../../app/api/apiSlice";

// Initializing an entity adapter for easier data normalization and manipulation
const useAdapter = createSelector({})

// Defining the initial state of this slice using the adapter
const initialState = useAdapter.getInitialState()

// Extending the original apiSlice with a new endpoint to handle fetching users
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // Defining a 'getUsers' endpoint
        getUsers: builder.query({
            // The path to fetch users
            query: () => '/users',
            // Custom validation of the response
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            // Specifies how long unused data should remain in the cache
            keepUnusedDataFor: 5,
            // Transforming the response data before it gets saved into Redux store
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id; // Remapping _id to id
                    return user;
                });
                // Using the entity adapter to insert the transformed data into the state
                return usersAdapter.setAll(initialState, loadedUsers)
            },
            // Specifies tags associated with the cached data
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'User', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'User', id }))
                    ]
                } else return [{ type: 'User', id: 'LIST' }]
            }
        }),
    }),
})

// Exposing a custom hook for fetching the users
export const {
    useGetUsersQuery,
} = usersApiSlice

// Creates a selector to fetch the result of the getUsers query
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// Creating a memoized selector for extracting users' data from the state
const selectUsersData = createSelector(
    selectUsersResult,
    usersResult => usersResult.data // Extracting normalized data with ids & entities
)

// Creating various selectors using the entity adapter.
// These selectors are used to get specific parts or pieces of the state.
export const {
    selectAll: selectAllUsers,       // Selects all user entities
    selectById: selectUserById,     // Selects a single user entity by ID
    selectIds: selectUserIds       // Selects all user IDs
    // Passing a selector that gets the users slice of the state
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
