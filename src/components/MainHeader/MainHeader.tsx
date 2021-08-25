import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.scss";

export type MainHeaderProps = {
  isAuthenticated?: boolean;
  onLogout?: any;
};

const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Login Screen</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
