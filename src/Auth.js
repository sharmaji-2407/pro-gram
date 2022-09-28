import React, { useEffect, useState } from "react";
// import fapp from "../src/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

//   useEffect(() => {
//     fapp.auth().onAuthStateChanged((user) => {
//       setCurrentUser(user)
//       setPending(false)
//     });
//   }, []);

  if(pending){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};