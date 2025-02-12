export const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};

export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};