const getUser = () => {
  const user =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : [];
  return user;
};

export default getUser;
