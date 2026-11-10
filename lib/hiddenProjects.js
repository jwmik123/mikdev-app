// Projects that stay in Strapi but should not appear on the site.
// Remove a title from this list to show the project again.
const HIDDEN_PROJECT_TITLES = ["Mursee 2021", "Posterity", "OAZ"];

export function isHiddenProject(project) {
  return HIDDEN_PROJECT_TITLES.includes(project?.attributes?.title?.trim());
}

export function withoutHiddenProjects(projects) {
  return {
    ...projects,
    data: projects.data.filter((project) => !isHiddenProject(project)),
  };
}
