"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError("* Passwords do not match");
      return;
    }
    setError("");
    console.log("Email:", email, "Password:", password);
  };

  return (
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
          Already have an account?{" "}
          <Link href="/user/login">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          className="w-full mb-4 rounded-xl"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          className="w-full mb-4 rounded-xl"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <Button
          variant="outline"
          className="w-full rounded-3xl"
          onClick={handleRegister}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default RegisterPage;
