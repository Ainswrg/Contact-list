import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthMeSelector } from "../../redux/auth/selector";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const isAuth = useSelector(getAuthMeSelector);
  console.log('isAuth12', isAuth);

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return <div>Home</div>;
};
