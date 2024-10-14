import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { createAccount, NewUser } from "@/helpers/createAccount";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    dob: "",
  });
  const [showDiolog, setshowDiolog] = useState("create");

  const newUserSchema = z.object({
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string(),
  });

  const handleSubmit = async (data: NewUser) => {
    const { success } = newUserSchema.safeParse(data);
    if (!success) return "Invalid user data";
    const response = await createAccount(data);
    if (response) console.log(response);
  };

  const handleNextClick = (data: string) => {
    // Perform any validations or operations here
    // If successful, show the OTP verification dialog
    setshowDiolog(data);
  };

  return (
    <>
      {/* Create Account Dialog */}
      <Dialog open={showDiolog === "create"}>
        <DialogTrigger onClick={() => handleNextClick("create")} asChild>
          <Button
            variant="outline"
            className="text-black font-semibold rounded-full w-full py-5"
          >
            Create Account
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[590px] mx-auto px-10 bg-black text-white">
          <DialogClose
            onClick={() => handleNextClick("")}
            className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <Cross2Icon className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="text-4xl mx-auto">
              <FaXTwitter />
            </DialogTitle>
            <DialogDescription className="text-3xl text-center px-8 text-white pt-3 font-semibold">
              Create your account
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center gap-8 py-4 px-8">
            <div className="flex justify-between w-full gap-4">
              <Input
                id="firstname"
                placeholder="First Name"
                className="py-7 border-white/30 text-base focus:border-blue-500"
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
              <Input
                id="lastname"
                placeholder="Last Name"
                className="py-7 border-white/30 text-base focus:border-blue-500"
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
                className="py-7 text-base border-white/30 focus:border-blue-500"
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
            <Button
              type="button"
              className="w-full bg-white/60 hover:bg-white text-black py-7 rounded-full mb-4  font-semibold"
              onClick={() => {
                handleSubmit(userData)
                handleNextClick("otp")}}
            >
              Next
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* OTP Verification Dialog */}
      {showDiolog === "otp" && (
        <Dialog
          open={showDiolog === "otp"}
          onOpenChange={() => handleNextClick("")}
        >
          <DialogContent className="sm:max-w-[590px] mx-auto px-10 bg-black text-white">
            <DialogClose
              onClick={() => handleNextClick("")}
              className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <Cross2Icon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <DialogHeader>
              <DialogTitle className="text-4xl mx-auto mb-2">
                <FaXTwitter />
              </DialogTitle>
              <DialogTitle className="text-3xl mx-auto">Verify OTP</DialogTitle>
              <DialogDescription className=" text-center px-8 text-white pt-6 font-semibold">
                Enter the OTP sent to your email
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col justify-center gap-8  px-8">
              <div className="flex flex-col gap-4 justify-center mx-auto">
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup>
                    <InputOTPSlot className="w-14 h-14 text-xl" index={0} />
                    <InputOTPSlot className="w-14 h-14 text-xl" index={1} />
                    <InputOTPSlot className="w-14 h-14 text-xl" index={2} />
                    <InputOTPSlot className="w-14 h-14 text-xl" index={3} />
                    <InputOTPSlot className="w-14 h-14 text-xl" index={4} />
                    <InputOTPSlot className="w-14 h-14 text-xl" index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <DialogFooter className="mx-auto mt-6 w-full px-8">
              <Button
                type="submit"
                className="w-full bg-white/60 hover:bg-white text-black py-7 rounded-full mb-4 font-semibold"
              >
                Verify
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
