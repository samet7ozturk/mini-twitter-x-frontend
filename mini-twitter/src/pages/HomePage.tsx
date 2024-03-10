import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api";
import { useAppDispatch } from "../store/store";
import { sendLoginInfo } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import svg1 from "../assets/homepage/twitter-logo.svg";
import svg2 from "../assets/homepage/home-logo.svg";
import svg3 from "../assets/homepage/explore-logo.svg";
import svg4 from "../assets/homepage/notification-logo.svg";
import svg5 from "../assets/homepage/messages-logo.svg";
import svg6 from "../assets/homepage/bookmarks-logo.svg";
import svg7 from "../assets/homepage/lists-logo.svg";
import svg8 from "../assets/homepage/profile-logo.svg";
import svg9 from "../assets/homepage/more-logo.svg";
import svg10 from "../assets/homepage/customize-logo.svg";
import png1 from "../assets/homepage/circle-profile.png";

interface LoginFormInput {
  username: string;
  password: string;
}

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit = async (data: LoginFormInput) => {};

  return (
    <>
      <div>
        <img src={svg1} />
        <button>
          <img src={svg2} />
          Home
        </button>
        <button>
          <img src={svg3} />
          Explore
        </button>
        <button>
          <img src={svg4} />
          Notifications
        </button>
        <button>
          <img src={svg5} />
          Messages
        </button>
        <button>
          <img src={svg6} />
          Bookmarks
        </button>
        <button>
          <img src={svg7} />
          Lists
        </button>
        <button>
          <img src={svg8} />
          Profile
        </button>
        <button>
          <img src={svg9} />
          More
        </button>
        <button>Tweet</button>
      </div>
      <div>
        <div>
          <h1>Home</h1>
          <img src={svg10} />
        </div>
        <div>
          <img src={png1} />
          <textarea name="text" id="" cols={30} rows={10}></textarea>
        </div>
      </div>
      <div></div>

      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </>
  );
}

export default HomePage;
