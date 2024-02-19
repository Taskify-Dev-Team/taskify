/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";

function RegisterPage() {
    return(
        <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl text-center text-orange-500 mb-4">
          <span className="border-b-2 border-orange-500">Task</span>ify
        </h1>
        <div className="bg-zinc-900 p-8 rounded-xl shadow-md">
          <p className="text-white text-2xl mb-4 text-center">
            <span className="border-b-2 border-orange-500 inline-block">
              Sign-up
            </span>
          </p>
          <p className="text-white text-sm mb-4">
            Already have an account? {' '}
            <Link href="/user/login">
              <span className="text-orange-500 underline cursor-pointer">Click here</span>
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
          <Input
            type="password"
            className="w-full mb-4 rounded-xl"
            placeholder="Confirm password"
          />
          <Button variant="outline" className="w-full rounded-3xl">
            Register
          </Button>
        </div>
      </div>
    )
}

export default RegisterPage