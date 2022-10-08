import React from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

type LoginValues = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
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
        <form>
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
      </Paper>
    </Box>
  );
};
