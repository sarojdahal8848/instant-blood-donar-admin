import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./loginpage.scss";
import { useState } from "react";

interface UserInput {
  username: string;
  password: string;
}

const userSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).max(32).required(),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserInput>({
    resolver: yupResolver(userSchema),
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="loginpage">
      <div className="loginpage__container">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div>
              <PersonIcon className="icon" />
              <input
                type="text"
                placeholder="username"
                {...register("username", { required: true })}
              />
            </div>
            <p className="error-message">{errors.username?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div>
              <LockIcon className="icon" />
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
              />
              {showPassword ? (
                <RemoveRedEyeIcon
                  className="icon"
                  onClick={handleShowPassword}
                />
              ) : (
                <LockIcon className="icon" onClick={handleShowPassword} />
              )}
            </div>
            <p className="error-message">{errors.password?.message}</p>
          </div>
          <p className="forget-password">Forget Password?</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export { LoginPage };
