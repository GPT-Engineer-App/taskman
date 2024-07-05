import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const InboxPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Inbox</h1>
      <div className="mb-4">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center mb-2">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTask(index)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
          </div>
        ))}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a new task</DialogTitle>
          </DialogHeader>
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task title"
            className="mb-4"
          />
          <Button onClick={addTask}>Add Task</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InboxPage;