/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-md">
        <p className="text-white text-2xl mb-4">Welcome back!</p>
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

        <Button className="w-full rounded-3xl">Login</Button>
      </div>
    </div>
  );
}

export default LoginPage;
