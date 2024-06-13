// components/TaskBoard.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../../../components/ui/input";
import Header from "@/components/Header/Header";
import Link from "next/link";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "todo",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      status: "in_progress",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      status: "done",
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      status: "todo", // Pode definir o status inicial como 'todo'
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <>
      <Header>
        <Link className="rounded-3xl" href="/task/new-task">
          New Task
        </Link>
      </Header>
      <div className="flex flex-row space-x-4 p-4">
        <div className="w-1/3">
          <h2 className="text-2xl text-orange-500 mb-4">To Do</h2>
          <div className="bg-zinc-900 p-4 rounded-xl shadow-md">
            {tasks
              .filter((task) => task.status === "todo")
              .map((task) => (
                <div key={task.id} className="mb-4">
                  <h3 className="text-white">{task.title}</h3>
                  <p className="text-gray-300">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-2xl text-orange-500 mb-4">In Progress</h2>
          <div className="bg-zinc-900 p-4 rounded-xl shadow-md">
            {tasks
              .filter((task) => task.status === "in_progress")
              .map((task) => (
                <div key={task.id} className="mb-4">
                  <h3 className="text-white">{task.title}</h3>
                  <p className="text-gray-300">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="w-1/3">
          <h2 className="text-2xl text-orange-500 mb-4">Done</h2>
          <div className="bg-zinc-900 p-4 rounded-xl shadow-md">
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <div key={task.id} className="mb-4">
                  <h3 className="text-white">{task.title}</h3>
                  <p className="text-gray-300">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
