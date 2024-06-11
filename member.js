function skillsMember() {
  // Get the member's skills
  const skills = this.skills;
  // If the member has no skills, return an empty array
  if (skills === undefined) return [];
  // Otherwise, return the member's skills
  return skills;
}