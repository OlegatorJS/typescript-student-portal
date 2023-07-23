import React, {ChangeEvent, MouseEvent, useState} from "react";
import {IAuth} from "../models/models"
import {useAppDispatch} from "../hooks/redux";
import {login} from "../store/ActionCreators";
import {useNavigate} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export function AuthPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState<IAuth>({
    password: "",
    username: ""
  })

  const isFormValid = () => {
    return form.password.trim().length && form.username.trim().length
  }

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, [event.target.name]: event.target.value}))
  }

  const loginHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (isFormValid()) {
      await dispatch(login(form))
      navigate("/")
    } else {
      alert("Form is invalid!")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Students Portal
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              label="User name"
              name="username"
              autoFocus
              onChange={changeHandler}
          />
          <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={changeHandler}
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginHandler}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}