import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { useEffect,useState } from "react";
import Child from "./Child";
import useHistory from "use-history";

const Das = () => {
  const history = useHistory();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
      <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
      <hr />
      <div className="App">Dashboard</div>
      <Child name="goCoder" />
    </>
  );
};

export default Das;
