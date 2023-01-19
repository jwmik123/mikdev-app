import { Canvas } from "@react-three/fiber";
import Experience from "../../components/Experience";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";

// export async function getStaticProps({ params }) {
//   const project = await fetchAPI(`/projects?slug=${params.slug}`);

//   return {
//     props: { project },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const projectResponse = await fetchAPI(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`
  );
  return {
    props: {
      project: projectResponse.data,
    },
  };
}

// export async function getStaticPaths() {
//   const projects = await fetchAPI("/projects");

//   return {
//     paths: projects.data.map((project) => ({
//       params: {
//         slug: project.attributes.slug,
//       },
//     })),
//     fallback: false,
//   };
// }

export default function DetailProject({ project }) {
  return (
    <>
      <section>
        <h1>{project.attributes.title}</h1>
        <p>{project.attributes.content}</p>
        <Image
          src="https://mik-development.s3.eu-central-1.amazonaws.com/mursee.png"
          width="400"
          height="300"
          alt={project.attributes.slug}
        />
        <br />
      </section>
    </>
  );
}
