/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { signIn } from 'next-auth/react';

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
        <Button
          variant="outline"
          className="w-full rounded-3xl"
          onClick={async () => await signIn("github", { callbackUrl: '/' })} // pra onde redirecionar usuario recem logado?
        >
          Login with GitHub
        </Button>
      </div>
    </div >
  );
}

export default LoginPage;
