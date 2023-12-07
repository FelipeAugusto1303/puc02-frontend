import { usersList } from "../database/database";

const generateId = () => {
  if (usersList.length === 0) {
    return 1;
  }
  return usersList[usersList.length - 1].id + 1;
};

const createUserService = (user) => {
  const newUser = { id: generateId(), ...user };
  usersList.push(newUser);
  return newUser;
};

export const setCreateUser = (user) => {
  const hasUser = usersList.find(
    (userList) => userList.username === user.username
  );
  if (user && !hasUser) {
    const newUser = createUserService(user);
    return {
      status: "201",
      message: "User created",
      response: newUser,
    };
  } else if (hasUser) {
    return {
      status: "409",
      message: "User already exists",
    };
  } else {
    return {
      status: "400",
      message: "Bad request",
    };
  }
};

export const getUserById = (id) => {
  const index = usersList.findIndex((user) => user.id === id);
  return {
    status: "200",
    response: usersList[index],
  };
};

export const login = (body) => {
  const user = usersList.find((user) => user.username === body.username);
  if (
    user &&
    user.username === body.username &&
    user.password === body.password
  ) {
    return {
      status: "200",
      response: user,
    };
  } else {
    return {
      status: "400",
      message: "Username or Password are incorrect",
    };
  }
};

//TODO: Create change password service
export const changePassword = (body) => {
  const user = usersList.find((userList) => userList === body.username);

  if (user) {
    const index = usersList.findIndex(
      (userList) => userList.username === body.username
    );
    const tempUser = usersList[index];
    tempUser.password = body.password;
    usersList.splice(index, 1, tempUser);

    return {
      status: "200",
      message: "Password changed",
    };
  } else {
    return {
      status: "404",
      message: "User not found",
    };
  }
};
