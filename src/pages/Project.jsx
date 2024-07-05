import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl mb-4">Project: {id}</h1>
      <p>Tasks for this project will be displayed here.</p>
    </div>
  );
};

export default ProjectPage;