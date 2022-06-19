import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const usersApi =createApi({
    reducerPath:"users",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://backend-netflix.herokuapp.com",
    }),
    endpoints:(builder)=>({
        getUsers:builder.query({
            query:()=>'users'
        })
    })
})

export const {useGetUsersQuery} =usersApi;