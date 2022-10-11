import { createContext, useState, useEffect } from "react";
import { getData } from "../services/data";
import { getUsers } from "../services/users";

export const usersContext = createContext();

function UsersProvider({ children }) {
  const [isLogIn, setIsLogIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    getUsers().then((response) => {
      setUsers(response);
    });
  }, []);
  useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
  }, []);
  return (
    <usersContext.Provider
      value={{
        isLogIn,
        setIsLogIn,
        users,
        setUsers,
        loggedInUser,
        setLoggedInUser,
        data,
        setData,
      }}
    >
      {children}
    </usersContext.Provider>
  );
}

export default UsersProvider;
