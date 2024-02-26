import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";
import Image from "next/image";

function TasksPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-zinc-800 w-48 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl text-center text-orange-500 mb-4">
            <span className="border-b-2 border-orange-500">Task</span>ify
          </h1>
        </div>
        {/* Sidebar content */}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-zinc-800 text-white p-4 border-b border-orange-500">
          <div className="relative">
            <Input
              type="text"
              className="w-56 rounded-xl pl-8"
              placeholder="  Search tasks..."
            />
            <div className="absolute inset-y-0 left-2 flex items-center">
              <Image
                className="ml-1"
                src="/pesquisar.svg"
                alt="vector-1"
                width={20}
                height={20}
              />
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-4">{/* Your main content here */}</main>

        {/* Button with SVG */}
        <button className="absolute top-0 right-0 mr-2 mt-2">
          <Image
            className="mt-4"
            src="/three-dots.svg"
            alt="menu"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}

export default TasksPage;
