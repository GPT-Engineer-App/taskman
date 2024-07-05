import { NavLink } from "react-router-dom";
import { Package2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { navItems } from "../App";

const Sidebar = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    setProjects([...projects, { name: newProject, tasks: 0 }]);
    setNewProject("");
  };

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>TodoMaster</span>
          </NavLink>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
            {navItems.map((item) => (
              <SidebarNavLink key={item.to} to={item.to}>
                {item.icon}
                {item.title}
              </SidebarNavLink>
            ))}
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Projects</h2>
              {projects.map((project, index) => (
                <SidebarNavLink key={index} to={`/project/${index}`}>
                  <span className="flex-1">{project.name}</span>
                  <span className="text-xs text-muted-foreground">{project.tasks}</span>
                </SidebarNavLink>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add a new project</DialogTitle>
                  </DialogHeader>
                  <Input
                    value={newProject}
                    onChange={(e) => setNewProject(e.target.value)}
                    placeholder="Project name"
                    className="mb-4"
                  />
                  <Button onClick={addProject}>Add Project</Button>
                </DialogContent>
              </Dialog>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

export default Sidebar;