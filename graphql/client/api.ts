import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql',{
    headers:()=>({
        Authorization:`${window.localStorage.getItem('twitter_token')}`
    })
})