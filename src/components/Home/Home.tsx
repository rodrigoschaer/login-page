import { useContext } from "react";
import AuthContext from "../context/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.scss";

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout} />
    </Card>
  );
};

export default Home;
