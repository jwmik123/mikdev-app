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
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettifies URL, not sure if necessary...
    }
  );
  const projectsResponse = await fetchAPI(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects?${query}`
    // `${process.env.NEXT_PUBLIC_BASE_URL}/projects?populate[headerImage][fields][0]=name&populate[headerImage][fields][1]=url&populate[images][fields]`
  );
  return {
    props: {
      projects: projectsResponse,
    },
  };
}
