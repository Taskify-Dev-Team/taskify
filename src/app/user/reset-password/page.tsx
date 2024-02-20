/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";

function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl text-center text-orange-500 mb-4">
        <span className="border-b-2 border-orange-500">Task</span>ify
      </h1>
      <div className="bg-zinc-900 p-8 rounded-xl shadow-md">
        <p className="text-white text-2xl mb-4 text-center">
          <span className="border-b-2 border-orange-500 inline-block">
            Forgot your password?
          </span>
        </p>
        <Input
          type="text"
          className="w-full mb-4 rounded-xl"
          placeholder="Email"
        />

        <p className="text-xs text-zinc-500">
          * We will send you a message to your email<br/>with the instructions to reset
          your password
        </p>
        <br/>

        <Button variant="outline" className="w-full rounded-3xl">
          Send
        </Button>
      </div>
    </div>
  );
}

export default RegisterPage;
