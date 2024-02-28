import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";
import Image from "next/image";

function TasksPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-zinc-800 w-48 flex-shrink-0 shadow-orange-500 shadow-md">
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
        <header className="bg-zinc-800 text-white p-4 border-b border-orange-500 relative">
          <div className="relative">
            <Input
              type="text"
              className="w-56 rounded-xl pl-8"
              placeholder="  Search tasks..."
            />
            {/* Orange line */}
            <div className="absolute inset-y-1 left-60 h-8 bg-orange-500 w-0.5"></div>
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
        <main className="flex p-4 gap-3">
          <div className="flex-col">
            <Input
              type="text"
              className="w-56 rounded-xl pl-8"
              placeholder="Edit column name:"
            />
            <div className="absolute ml-2 mt-3 h-0.5 w-52 bg-orange-500"></div>

            <Button
              variant="default"
              className="w-56 rounded-xl mt-6 bg-zinc-700"
            >
              +
            </Button>
          </div>

          <Button variant="default" className="w-10 rounded-full text-zinc-900">
            +
          </Button>
        </main>

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
