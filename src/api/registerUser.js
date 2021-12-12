import getUser from "./getUser.js";

const registerUser = (usr) => {
  const user = getUser() !== null ? getUser() : [];

  if (user.id) {
    return '"A user already existed.."';
  } else {
    localStorage.setItem("user", JSON.stringify(usr));
    return usr;
  }
};

export default registerUser;
