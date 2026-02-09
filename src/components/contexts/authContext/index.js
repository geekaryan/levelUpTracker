import { useState, useEffect } from "react";

const AuthContext = React.createContext();

export function AuthProvider({ childern }) {
  const [currentUser, setCurrentUser] = useState(null);
}
