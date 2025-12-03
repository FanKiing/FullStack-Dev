export const distinctGroups = (stagiaires) => {
  return Array.from(new Set(stagiaires.map((s) => s.groupe))).sort();
};
