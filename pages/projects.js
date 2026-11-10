import Projects from "../components/Projects";

import axios from "axios";
import qs from "qs";
import { withoutHiddenProjects } from "../lib/hiddenProjects";

const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

ProjectsList.getInitialProps = async (ctx) => {
  const query = qs.stringify(
    {
      populate: {
        headerImage: {
          fields: ["name", "url"],
        },
        coverVideo: {
          fields: ["name", "url"],
        },
      },
    },
    { encodeValuesOnly: true }
  );
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects?${query}`
    );
    const projects = withoutHiddenProjects(res.data);
    return { projects };
  } catch (error) {
    return { error };
  }
};

export default ProjectsList;
