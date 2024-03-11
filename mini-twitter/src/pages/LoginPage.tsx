import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";
import { useAppDispatch } from "../store/store";
import { sendLoginInfo } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import svg from "../assets/loginpage/twitter-logo.svg";

interface LoginFormInput {
  username: string;
  password: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit = async (data: LoginFormInput) => {
    try {
      const response = await AxiosInstance.post("/profile/login", data);
      console.log("Login successful:", response.data);
      dispatch(sendLoginInfo(data));
      navigate("/");
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error);

      // Set an error message for the form
      setError("username", {
        type: "manual",
        message: "Invalid username or password", // Customize the error message
      });
    }
  };

  return (
    <main>
      <div>
        <img src={svg} />
        <h1>Log in to Twitter</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register("username", {
                required: "Name is required!",
              })}
              placeholder=" Phone number, email address"
            ></input>
            <div>
              <p>{errors.username?.message}</p>
            </div>
          </div>

          <div>
            <input
              type="password"
              {...register("password", {
                required: "Password is required!",
              })}
              placeholder=" Password"
            ></input>
            <div>
              <p>{errors.password?.message}</p>
            </div>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
        <div className="loginpage-sections">
          <p>Forgot password</p>
          <p>Sign up to Twitter</p>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
