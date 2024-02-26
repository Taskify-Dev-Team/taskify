import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";

function TasksPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-zinc-800 w-48 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-lg text-center font-bold text-white">Taskify</h1>
        </div>
        {/* Sidebar content */}
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-zinc-900 text-white p-4">
          <Input
            type="text"
            className="w-56 mb-4 rounded-xl"
            placeholder="Email"
          />
        </header>

        {/* Main content area */}
        <main className="flex-1 p-4">{/* Your main content here */}</main>
      </div>
    </div>
  );
}

export default TasksPage;
