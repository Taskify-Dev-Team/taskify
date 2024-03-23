"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";
import Image from "next/image";
import Link from "next/link";

function TasksPage() {
  const [inputs, setInputs] = useState([{ id: 1 }]);

  const addInput = () => {
    const newCol = { id: inputs.length + 1 };
    setInputs([...inputs, newCol]);
  };

  const [openSettings, setOpenSettings] = useState(false);

  const actionOpenSettings = () => {
    setOpenSettings(true);
  };

  const actionCloseSettings = () => {
    setOpenSettings(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-zinc-900 w-48 flex-shrink-0 shadow-orange-500 shadow-md">
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
        <header className="bg-zinc-900 text-white p-4 border-b border-orange-500 relative">
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
          {inputs.map((input) => (
            <div key={input.id} className="flex-col relative">
              <Input
                type="text"
                className="w-56 rounded-xl pl-8"
                placeholder="Edit column name:"
              />
              <div className="absolute ml-2 mt-3 h-0.5 w-52 bg-orange-500"></div>
              <Button
                variant="default"
                className="w-56 rounded-xl mt-6 bg-zinc-700 mr-4"
              >
                +
              </Button>
            </div>
          ))}
          <Button
            variant="default"
            className="w-10 rounded-full text-zinc-900 flex items-center justify-center -ml-4"
            onClick={addInput}
          >
            +
          </Button>
        </main>

        {/* Button with SVG */}
        <button
          className="absolute top-0 right-0 mr-2 mt-2"
          onClick={actionOpenSettings}
        >
          <Image
            className="mt-4"
            src="/three-dots.svg"
            alt="menu"
            width={40}
            height={40}
          />
        </button>
        {openSettings && (
          <div
            className="fixed top-10 right-10 bg-zinc-900 rounded-xl shadow-orange-500 shadow-sm"
            style={{ width: "200px", height: "165px" }}
          >
            <div className="bg-zinc-900 p-4 rounded-xl">
              <ul className="">
                <Button className="bg-transparent text-zinc-400 h-4 hover:bg-transparent hover:text-orange-500 mr-5 mt-6">
                  Profile
                </Button>
                <Button className="bg-transparent text-zinc-400 h-4 hover:bg-transparent hover:text-orange-500 mr-5">
                  Permissions
                </Button>
                <Button className="bg-transparent text-zinc-400 h-4 hover:bg-transparent hover:text-orange-500 mr-5">
                  Team
                </Button>
                <Button className="bg-transparent text-zinc-400 h-4 hover:bg-transparent hover:text-orange-500 mr-5">
                  Settings
                </Button>
              </ul>
              <button
                className="absolute top-2 right-2 bg-transparent text-orange-500 rounded-full p-1"
                onClick={actionCloseSettings}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TasksPage;
