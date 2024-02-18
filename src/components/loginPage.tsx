/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

function LoginPage() {
  return (
<div className="flex flex-col justify-center items-center h-screen">
  <div>
    <h1 className="text-4xl text-center text-orange-500 mb-4">
    <span className="border-b-2 border-orange-500">Task</span>ify
    </h1>
  </div>
  <div className="bg-zinc-900 p-8 rounded-xl shadow-md">
    <p className="text-white text-2xl mb-4 text-center">
      <span className="border-b-2 border-orange-500 inline-block">Welcome back!</span>
    </p>
    <p className="text-white text-sm mb-4">
      Don't have an account yet?{" "}
      <a href="#" className="text-orange-500 underline">
        Click here
      </a>
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
      <a href="#" className="text-orange-500 underline">
        Click here
      </a>
      .
    </p>
    <Button variant="outline" className="w-full rounded-3xl">Login</Button>
  </div>
</div>
  );
}

export default LoginPage;
