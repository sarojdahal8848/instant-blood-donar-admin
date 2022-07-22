export const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user-data")!);
  if (user) {
    return user.userId;
  }
  return false;
};
