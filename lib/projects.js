import SampleData from "../assets/data/SampleData";

export function getAllProjectIds() {
  return SampleData.map((project) => {
    return {
      params: {
        id: project.slug,
      },
    };
  });
}

export function getProjectData(id) {
  return {
    id,
    ...SampleData,
  };
}
