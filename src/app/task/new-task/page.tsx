// pages/newTaskPage.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Replace 'postcss' with your actual import path

const NewTaskPage = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [taskType, setTaskType] = useState("Task"); // Default task type

  const handleAddTask = () => {
    // Validate if title and description are not empty
    if (!newTaskTitle.trim() || !newTaskDescription.trim()) {
      alert("Please enter both title and description.");
      return;
    }

    // Here you can implement the logic to add the task
    console.log(
      "Adding task:",
      newTaskTitle,
      newTaskDescription,
      assignedTo,
      taskType
    );

    // Clear the input fields after adding the task
    setNewTaskTitle("");
    setNewTaskDescription("");
    setAssignedTo("");
    setTaskType("Task"); // Reset task type to default
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[40%] h-[50%] mt-8">
        <h2 className="text-2xl text-orange-500 mb-4">Add New Task</h2>
        <div className="bg-zinc-900 h-[100%] p-4 rounded-xl shadow-md">
          <Input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Title"
            className="w-full mb-4 rounded-xl"
          />
          <Input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder="Description"
            className="w-full mb-4 rounded-xl"
          />
          <div className="flex items-center mb-4">
            <label className="text-orange-500 mr-2">Assign to:</label>
            <Input
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Assign to"
              className="w-[85%] rounded-xl"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="text-orange-500 mr-2">Task Type:</label>
            <select
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
              className="bg-gray-800 text-white hover:bg-gray-700 p-2 rounded-xl"
            >
              <option value="Task" className="text-gray-500">
                Task
              </option>
              <option value="Issue" className="text-gray-500">
                Issue
              </option>
              <option value="History" className="text-gray-500">
                History
              </option>
            </select>
          </div>
          <Button onClick={handleAddTask} className="w-full mt-16 rounded-3xl">
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewTaskPage;
