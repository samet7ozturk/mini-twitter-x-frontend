import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";
import { useAppDispatch } from "../store/store";
import { sendLoginInfo } from "../store/slices/userSlice";

interface LoginFormInput {
  username: string;
  password: string;
}

function LoginPage() {
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
    <>
      <img />
      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("username", {
              required: "Name is required!",
            })}
            placeholder=" Name"
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
        <button type="submit">Log In</button>
      </form>
      <button>Forgot password</button>
      <button>Sign up to Twitter</button>
    </>
  );
}

export default LoginPage;
