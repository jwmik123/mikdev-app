import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience";
import { fetchAPI } from "../../lib/api";

export async function getStaticProps({ params }) {
  const project = await fetchAPI(`/projects?slug=${params.slug}`);

  return {
    props: { project },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const projects = await fetchAPI("/projects");

  return {
    paths: projects.data.map((project) => ({
      params: {
        slug: project.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export default function DetailProject({ project }) {
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
        {console.log("Project: " + project.data.slug)}
        <br />
      </section>
    </>
  );
}
