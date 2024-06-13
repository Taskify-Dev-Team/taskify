// components/AddTaskCard.tsx

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AddTaskCardProps {
  onAddTask: (title: string, description: string) => void;
}

const AddTaskCard: React.FC<AddTaskCardProps> = ({ onAddTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleAddTask = () => {
    onAddTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div className="w-full mt-8">
      <h2 className="text-2xl text-orange-500 mb-4">Add New Task</h2>
      <div className="bg-zinc-900 p-4 rounded-xl shadow-md">
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
        <Button onClick={handleAddTask} className="w-full rounded-3xl">
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTaskCard;
