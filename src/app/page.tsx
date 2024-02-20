import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-12 flex flex-col justify-center items-center gap-y-12">
      <div className="absolute top-0 right-0 p-4">
        <Link href='/user/login'>
        <Button variant="outline" className="w-32 rounded-3xl">
          Login
        </Button>
        </Link>
        <Link href='/user/register'>
        <Button variant="outline" className="w-32 rounded-3xl ml-4">
          Register
        </Button>
        </Link>
      </div>
      <h1 className="text-4xl text-center text-orange-500 mb-4">
        <span className="border-b-2 border-orange-500">Task</span>ify
      </h1>
      <div className="bg-zinc-900 rounded-xl flex flex-col justify-center items-center gap-20 w-2/3 h-[640px] py-16">
        <h1 className="text-3xl font-semibold">
          Optimize and{" "}
          <span className="underline decoration-orange-500 underline-offset-4 decoration-2">
            boost
          </span>{" "}
          the efficiency of your team
        </h1>
        <div className="flex justify-center items-start gap-20 flex-1">
          <Image
            src="/landing-page-vector-1.svg"
            alt="vector-1"
            width={200}
            height={200}
          />
          <div className="h-full w-px bg-orange-500" />
          <Image
            src="/landing-page-vector-2.svg"
            alt="vector-1"
            width={200}
            height={200}
          />
          <div className="h-full w-px bg-orange-500" />
          <Image
            src="/landing-page-vector-3.svg"
            alt="vector-1"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
