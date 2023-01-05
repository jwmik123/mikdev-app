import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience";
import { getAllProjectIds, getProjectData } from "../../lib/projects";

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
}

export default function DetailProject({ projectData }) {
  return (
    <>
      {/* <section className="project-page">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-1, 1.5, 4],
          }}
        >
          <Experience url="https://www.megosu.com" />
        </Canvas>
      </section> */}
      <section>
        {console.log(projectData)}
        <br />
      </section>
    </>
  );
}
