import UsersContext from "./users-context";

const UsersProvider = (props) => {
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];

  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
