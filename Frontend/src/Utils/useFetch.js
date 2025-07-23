import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [User, setUser] = useState({
    exist: null,
    user: null,
    logs: null,
  });

  //   hits the backend to get the info
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/app/user", {
          withCredentials: true,
        });
        setUser({
          exist: true,
          user: res.data.user,
          logs: res.data.logs,
        });
      } catch (error) {
        console.error("Error in protected routes", error.message);
        setUser({
          exist: false,
          logs: [],
          user: [],
        });
      }
    };
    fetch();
  }, []);

  return User;
};

export default useFetch;
