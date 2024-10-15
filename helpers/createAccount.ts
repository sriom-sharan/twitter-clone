import { graphqlClient } from "@/graphql/client/api";
import { createUserData } from "@/graphql/query/user";

export interface NewUser {
  email: string;
  dob: string;
  firstName: string;
  lastName: string;
}

export async function verifyOTP(otp: number) {
  return "ok";
}

export const createAccount = async ({
  email,
  dob,
  firstName,
  lastName,
}: NewUser) => {
  const response = await graphqlClient.request(createUserData, {
    email,
    dob,
    lastName,
    firstName,
  });

  return "OTP is sent to email address";
};
export const createUserName = async (username: string) => {
  return "ok";
};
export const createUserPassword = async (password: string) => {
  return "ok";
};
