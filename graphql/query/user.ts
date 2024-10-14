import { graphql } from "../../gql";

export const verifyTokenQuery = graphql(`#graphql
    query VerifyUser($token:String!){
        verifyToken(token: $token)
    }

`);
export const createUserData = graphql(`#graphql
    mutation CreateUser($email:String!,$lastName:String!,$firstName:String!,$dob:String!){
        createUser(email: $email,lastName:$lastName,firstName:$firstName,dob:$dob)
    }

`);