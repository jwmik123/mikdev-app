// import SampleData from "../assets/data/SampleData";

// export function getAllProjectIds() {
//   return SampleData.map((project) => {
//     return {
//       params: {
//         id: project.slug,
//       },
//     };
//   });
// }

// export function getProjectData(id) {
//   return {
//     id,
//     ...SampleData,
//   };
// }

export function getStrapiURL(path = "") {
  return `${process.env.STRAPI_API_URL || "http://localhost:1337/api"}${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
