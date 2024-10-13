import { graphql } from "../../gql";

export const verifyTokenQuery = graphql(`#graphql
    query VerifyUser($token:String!){
        verifyToken(token: $token)
    }

`);