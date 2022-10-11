import { createContext, useState, useEffect } from "react";
import { getUsers } from "../services/users";

export const usersContext = createContext();

function UsersProvider({ children }) {
  const [isLogIn, setIsLogIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);
  return (
    <usersContext.Provider value={{ isLogIn, setIsLogIn, users, setUsers ,loggedInUser, setLoggedInUser }}>
      {children}
    </usersContext.Provider>
  );
}

export default UsersProvider;
