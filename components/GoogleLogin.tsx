"use client";
import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/graphql/client/api";
import { verifyTokenQuery } from "@/graphql/query/user";

const handleGoogleToken = async (cred: CredentialResponse) => {
  const response = await graphqlClient.request(
    verifyTokenQuery,{token:cred.credential||""}
  )
  console.log(response);
  
};

const Googlelogin = () => {
  return (
    <div className="w-full rounded-full">
      <GoogleLogin
        shape="circle"
        size="large"
        text="continue_with"
        ux_mode="popup"
        onSuccess={(cred) => {
          handleGoogleToken(cred);
          console.log(cred);
        }}
      />
    </div>
  );
};

export default Googlelogin;
