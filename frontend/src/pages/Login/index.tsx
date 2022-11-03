import React from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import { authRequest, loginRequest } from "../../redux/auth/actions";
import { getAuthMeSelector, getAuthSelector, getDataSelector } from "../../redux/auth/selector";

type LoginValues = {
  email: string;
  password: string;
};

const Login: React.FC = (props: any) => {
  const dataResponse = useSelector(getDataSelector);
  const auth = useSelector(getAuthSelector);
  const isAuth = useSelector(getAuthMeSelector);

  const onSubmit = (values: LoginValues) => {
    console.log("values", values);

    props.login(values);
    // console.log("pAuth", pAuth);
    console.log("dataResponse", dataResponse);
    console.log("auth", auth);
  };


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginValues>({
    defaultValues: {
      email: "test3@gmail.com",
      password: "test123",
    },
    mode: "onChange",
  });

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      height={"100vh"}
      width={"100%"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: "24rem",
          height: "fit-content",
          p: "3rem",
          border: "1px solid rgb(156 163 175)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
          Авторизация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            sx={{ mb: 2 }}
            label="Почта"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register("email", {
              required: "Введите почту!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Введите корректный почтовый адрес!",
              },
            })}
            fullWidth
          />
          <TextField
            {...register("password", {
              required: "Введите пароль!",
              minLength: 5,
            })}
            sx={{ mb: 2 }}
            label="Пароль"
            type="password"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            fullWidth
          />
          <Button
            sx={{ mb: 2 }}
            disabled={!isValid}
            type="submit"
            size="large"
            variant="contained"
            fullWidth
          >
            Войти
          </Button>
        </form>
        {/* {dataResponse?.error && (
          <Alert
            severity="warning"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <strong>{dataResponse.error}</strong>
          </Alert>
        )} */}
        <Typography
          variant="body2"
          display="flex "
          justifyContent="space-between"
        >
          Нет Аккаунта?
          <Link component={RouterLink} to="/signup">
            Зарегистрироваться
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (params: LoginValues) => dispatch(loginRequest(params)),
  // authMe: () => dispatch(authRequest()),
});

export default connect(null, mapDispatchToProps)(Login);
