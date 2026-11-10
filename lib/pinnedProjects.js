// Projects shown first, in this order. All others follow, newest id first.
const PINNED_PROJECT_TITLES = [
  "Kasten Fabriek",
  "The Sandwich Bar Amsterdam",
  "Mursee 2026",
];

function pinnedRank(project) {
  const rank = PINNED_PROJECT_TITLES.indexOf(project.attributes.title.trim());
  return rank === -1 ? PINNED_PROJECT_TITLES.length : rank;
}

export function compareProjects(a, b) {
  return pinnedRank(a) - pinnedRank(b) || b.id - a.id;
}
