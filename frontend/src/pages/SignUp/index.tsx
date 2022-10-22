import React from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import { signupRequest } from "../../redux/auth/actions";

type SingUpValues = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp: React.FC = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SingUpValues>({
    defaultValues: {
      fullName: "Jhon Doe",
      email: "test3@gmail.com",
      password: "test123",
    },
    mode: "onChange",
  });

  const callback = () => {
    console.log("inside callback after login");
  };

  const onSubmit = (values: SingUpValues) => {
    console.log(values);

    const data = {
      values,
      callback,
    };

    console.log(props.signup(data));
    data.callback();
  };

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
          Регистрация
        </Typography>
        <Box display="flex" justifyContent="center" marginBottom={4}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            sx={{ mb: 2 }}
            label="Имя"
            error={Boolean(errors.fullName?.message)}
            helperText={errors.fullName?.message}
            fullWidth
          />
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
            Зарегистрироваться
          </Button>
        </form>
        <Typography
          variant="body2"
          display="flex "
          justifyContent="space-between"
        >
          Есть Аккаунт?
          <Link component={RouterLink} to="/login">
            Войти
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  signup: () => dispatch(signupRequest()),
});

export default connect(null, mapDispatchToProps)(SignUp);
