// "use client";

// import { createContext, useState } from "react";
// import type { User } from "../types/index";

// export const AuthContext = createContext<{
//   user: User | null;
//   setUser: (user: User | null) => void;
// }>({
//   user: null,
//   setUser: () => {},
// });

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
