export const calculateExperienceYears = () => {
  const startDate = new Date("2021-05-01");
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const isBeforeAnniversary =
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate());

  return isBeforeAnniversary ? yearsDifference - 1 : yearsDifference;
};
