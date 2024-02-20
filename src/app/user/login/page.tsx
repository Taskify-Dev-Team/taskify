/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";

function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl text-center text-orange-500 mb-4">
        <span className="border-b-2 border-orange-500">Task</span>ify
      </h1>
      <div className="bg-zinc-900 p-8 rounded-xl shadow-md">
        <p className="text-white text-2xl mb-4 text-center">
          <span className="border-b-2 border-orange-500 inline-block">
            Welcome back!
          </span>
        </p>
        <p className="text-white text-sm mb-4">
          Don't have an account yet?{" "}
          <Link href="/user/register">
            <span className="text-orange-500 underline cursor-pointer">
              Click here
            </span>
          </Link>
          .
        </p>
        <Input
          type="text"
          className="w-full mb-4 rounded-xl"
          placeholder="Email"
        />
        <Input
          type="password"
          className="w-full mb-4 rounded-xl"
          placeholder="Password"
        />
        <p className="text-white text-sm mb-4">
          Forgot your password?{" "}
          <Link href="/user/reset-password">
            <span className="text-orange-500 underline cursor-pointer">
              Click here
            </span>
          </Link>
          .
        </p>
        <Button variant="outline" className="w-full rounded-3xl">
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
