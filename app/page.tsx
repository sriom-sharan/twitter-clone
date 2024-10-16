"use client";
import FeedCard from "@/components/FeedCard";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { graphqlClient } from "@/graphql/client/api";
import { verifyTokenQuery } from "@/graphql/query/user";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const handleGoogleToken = async (cred: CredentialResponse) => {
  const response = await graphqlClient.request(verifyTokenQuery, {
    token: cred.credential || "",
  });
  console.log(response);
};

export default function Home() {
  const router = useRouter();
  return (
    <div className="border-x-[0.2px] w-screen h-screen flex  border-white/30 bg-black">
      <div className="w-1/2 flex justify-center h-full items-center">
        <FaXTwitter size={300} />
      </div>
      <div className="w-1/2 flex flex-col justify-center gap-24 h-full ">
        <h1 className="text-6xl font-black">Happening now</h1>
        <div className="w-[300px] flex flex-col gap-2">
          <p className="font-bold  mb-4 text-4xl">Join today.</p>
          <GoogleLogin
            shape="circle"
            size="large"
            width={"300"}
            text="continue_with"
            ux_mode="popup"
            onSuccess={(cred) => {
              handleGoogleToken(cred);
              console.log(cred);
            }}
          />
          <p className="text-center text-white/60 ">or</p>
          <Button
            onClick={() => {
              router.push("/signup");
            }}
            variant="outline"
            className="text-black bg-white font-medium rounded-full w-[300px] py-5"
          >
            Create Account
          </Button>
          <p className="text-[13px] tracking-wide text-white/40  my-2">
            By signing up, you agree to the{" "}
            <span className="text-blue-400 font-medium">Terms of Service</span>{" "}
            and <span className="text-blue-400">Privacy Policy</span>, including
            <span className="text-blue-400"> Cookie Use</span>.
          </p>
          <p className=" font-semibold mt-6 mb-2">Already have an account?</p>
          <button className="text-blue-500 border-[1px] py-2 rounded-full border-white/40">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
