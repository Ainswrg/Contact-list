import React from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const auth = false;

  React.useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth]);
  return <div>Home</div>;
};
