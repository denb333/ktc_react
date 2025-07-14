import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import type { User } from "../types/User";

export const UserContext = createContext<{
    users: User[];
    addUser: (user: User) => void;
}>({
    users: [],
    addUser: () => {},
});

 const userList = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
    id: Date.now(),
  },
  {
    name: "Jane Doe",   
    email: "jane.doe@example.com",
    age: null,
    id: Date.now(),
  }
 ]

export function UserProvider({children}: {children: React.ReactNode}) {
    const [users, setUser] = useState<User[]>([]);
    const addUser = (user: User) => {
        setUser((prev) => [
          ...prev,
          { ...user, id: Date.now() }, 
        ]);
      };
    useEffect(() => {
        userList.forEach((user) => {
          addUser(user);
        });
      }, []);
    return (
        <UserContext.Provider value={{users, addUser}}>
            {children}
        </UserContext.Provider>
    )
}

