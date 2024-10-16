"use client";
import React from "react";
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
import { useRouter } from "next/navigation";
const DialogComponent = ({
  children,
  isOpen,
  title,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
}) => {
  const router = useRouter();
  return (
    <div>
      <Dialog open={isOpen}>
        <DialogContent  className="sm:max-w-[590px] mx-auto px-10 bg-black text-white">
          <DialogClose
            onClick={() => {
              router.back();
            }}
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
              {title}
            </DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
