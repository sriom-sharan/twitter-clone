"use client";
import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/graphql/client/api";
import { verifyTokenQuery } from "@/graphql/query/user";
import Login from "./Login";

const handleGoogleToken = async (cred: CredentialResponse) => {
  const response = await graphqlClient.request(verifyTokenQuery, {
    token: cred.credential || "",
  });
  console.log(response);
};

const Googlelogin = () => {
  return (
    <div className="w-full flex flex-col gap-2 p-4 items-start rounded-2xl border-[0.2px] border-white/20">
      <h1 className="font-semibold text-xl">New to X?</h1>
      <p className="text-[13px] font-medium text-white/60 mb-2">
        Sign up now to get your own personalized timeline!
      </p>
      <GoogleLogin
        shape="circle"
        size="large"
        width={"310"}
        text="continue_with"
        ux_mode="popup"
        onSuccess={(cred) => {
          handleGoogleToken(cred);
          console.log(cred);
        }}
      />
      <h1></h1>
      <Login />
      <p className="text-[13px] tracking-wide text-white/40  my-2">
        By signing up, you agree to the{" "}
        <span className="text-blue-400 font-medium">Terms of Service</span> and{" "}
        <span className="text-blue-400">Privacy Policy</span>, including
        <span className="text-blue-400"> Cookie Use</span>.
      </p>
    </div>
  );
};

export default Googlelogin;
