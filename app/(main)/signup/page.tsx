"use client";
import DialogComponent from "@/components/Dialog";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createAccount, NewUser } from "@/helpers/createAccount";
import React, { useState } from "react";
import { z } from "zod";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
  });
  const [showDiolog, setshowDiolog] = useState("create");
  const [loading, setLoading] = useState(false);

  const newUserSchema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string(),
  });

  const handleSubmit = async (data: NewUser) => {
    setLoading(true);
    const { success } = newUserSchema.safeParse(data);
    if (!success) return "Invalid user data";
    const response = await createAccount(data);
    if (response === "OTP is sent to email address") handleNextClick("otp");
    if (response) console.log(response);
    setLoading(false);
  };

  const handleNextClick = (data: string) => {
    // Perform any validations or operations here
    // If successful, show the OTP verification dialog
    setshowDiolog(data);
  };

  return (
    <div className=" my-auto" >
      <DialogComponent title="Create your account" isOpen={isOpen}>
        <div className="flex flex-col justify-center gap-8 py-4 px-8">
          <div className="flex justify-between w-full gap-4">
            <Input
              id="firstname"
              placeholder="First Name"
              className="py-7 border-white/30 bg-transparent text-base focus:border-blue-500"
              value={userData.firstName}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
            <Input
              id="lastname"
              placeholder="Last Name"
              className="py-7 border-white/30 bg-transparent text-base focus:border-blue-500"
              value={userData.lastName}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <Input
              id="email"
              placeholder="Email"
              className="py-7 text-base border-white/30 bg-transparent focus:border-blue-500"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="dob" className="flex flex-col gap-2 mb-2">
              <h2 className="font-semibold">Date of birth</h2>
              <p className="text-white/40 font-extralight leading-4">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
            </Label>
            <Input
              type="date"
              id="dob"
              className="py-7 text-base border-white/30 focus:border-blue-500"
              value={userData.dob}
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter className="mx-auto mt-6 w-full px-8">
          {loading ? (
            <svg
              className="animate-spin h-8 w-8 mx-auto mb-4  border-t-transparent border-x-blue-500 border-b-blue-600 border-[3px] rounded-full"
              viewBox="0 0 24 24"
            ></svg>
          ) : (
            <Button
              type="button"
              className={`w-full bg-white/80 hover:bg-white/95 text-black py-7 rounded-full mb-4  font-semibold`}
              onClick={() => {
                handleSubmit(userData);
                // handleNextClick("otp")
              }}
            >
              Next
            </Button>
          )}
        </DialogFooter>
      </DialogComponent>
    </div>
  );
};

export default SignUp;
