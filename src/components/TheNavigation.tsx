import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {authSlice} from "../store/slices/AuthSlice";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {AppBar, Toolbar} from "@mui/material";
import Box from "@mui/material/Box";

export function TheNavigation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {username, isAuthenticated} = useAppSelector(state => state.authReducer)

  const logoutHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    dispatch(authSlice.actions.logout());
    navigate("/auth");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography mr={5} component="div">
            <Link to={"/"}>Courses</Link>
          </Typography>
          {
            isAuthenticated &&
            <Typography mr={5} component="div" sx={{ flexGrow: 1 }}>{username}</Typography>
          }
          {
            !isAuthenticated
            ? <Typography component="div">
                <Link to={"/auth"}>Auth</Link>
                </Typography>
            : <Button variant="contained" size="small" onClick={logoutHandler}>Logout</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}