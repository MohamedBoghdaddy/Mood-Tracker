import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const useSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [nid, setNid] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/api/users/signup`,
        {
          username,
          email,
          password,
          gender,
          nid,
          firstName,
          middleName,
          lastName,
        },
        { withCredentials: true }
      );

      const { user } = response.data;

      // Store user in local storage
      localStorage.setItem("user", JSON.stringify({ user }));

      // Dispatch signup success
      dispatch({ type: "REGISTRATION_SUCCESS", payload: user });

      setSuccessMessage("Registration successful");
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage(
        error.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    gender,
    setGender,
    nid,
    setNid,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,
    errorMessage,
    successMessage,
    isLoading,
    handleSignup,
  };
};