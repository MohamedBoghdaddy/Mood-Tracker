import { useCallback } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

// Define apiUrl directly, removing the need for import.meta.env
const apiUrl = "http://localhost:4000";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = useCallback(async () => {
    try {
      // Send the logout request to the server
      await axios.post(
        `${apiUrl}/api/users/logout`,
        {},
        { withCredentials: true }
      );

      // Clear localStorage (client-side only)
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      // Remove Authorization header
      delete axios.defaults.headers.common["Authorization"];

      // Dispatch the logout action to update the auth state
      dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  }, [dispatch]);

  return { logout };
};
