import Projects from "../components/Projects";
import { fetchAPI } from "../lib/api";

const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsList;

export async function getStaticProps() {
  const projectsResponse = await fetchAPI(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects`
  );
  console.log(projectsResponse);
  return {
    props: {
      projects: projectsResponse,
    },
  };
}
