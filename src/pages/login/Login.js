import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [csrf, setCsrf] = useState("");

  const apiClient = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "X-CSRFToken": csrf,
    },
    withCredentials: true, // Ensure cookies are sent
  });

  useEffect(() => {
    apiClient
      .get("/get-csrf-token")
      .then(function (response) {
        setCsrf(response.data.csrfToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleLoginForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    document.cookie = `csrftoken=${csrf}; path=/`;
    apiClient
      .post("/user/login", { email: email, password: password })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <form onSubmit={handleLoginForm}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
