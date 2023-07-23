import React from "react"
import {Routes, Route, Navigate} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AuthPage} from "./pages/AuthPage";
import {CoursePage} from "./pages/CoursePage";
import {TheNavigation} from "./components/TheNavigation";
import {useAppSelector} from "./hooks/redux";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const defaultTheme = createTheme();

function App() {
  const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated} = useAppSelector(state => state.authReducer)
    return isAuthenticated ? children : <Navigate to="/auth" replace />;
  };

  return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
      <TheNavigation/>
        <Routes>
          <Route path={"/"} element={
            <PrivateWrapper>
              <MainPage/>
            </PrivateWrapper>
          }/>
          <Route path={"/auth"} element={<AuthPage/>}/>
          <Route path={"/course/:id"} element={
            <PrivateWrapper>
              <CoursePage/>
            </PrivateWrapper>}
          />
        </Routes>
    </ThemeProvider>
  )
}

export default App
