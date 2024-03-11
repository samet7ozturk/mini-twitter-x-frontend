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
    <div className="home-page">
      <div className="navbar">
        <div className="navbar-sections">
          <img src={svg1} alt="svg1" className="logo" />
          <div className="navbar-container">
            <button type="button" className="navbar-button">
              <img src={svg2} alt="svg2" />
              Home
            </button>
            <button type="button" className="navbar-button">
              <img src={svg3} alt="svg3" />
              Explore
            </button>
            <button type="button" className="navbar-button">
              <img src={svg4} alt="svg4" />
              Notifications
            </button>
            <button type="button" className="navbar-button">
              <img src={svg5} alt="svg5" />
              Messages
            </button>
            <button type="button" className="navbar-button">
              <img src={svg6} alt="svg6" />
              Bookmarks
            </button>
            <button type="button" className="navbar-button">
              <img src={svg7} alt="svg7" />
              Lists
            </button>
            <button type="button" className="navbar-button">
              <img src={svg8} alt="svg8" />
              Profile
            </button>
            <button type="button" className="navbar-button">
              <img src={svg9} alt="svg9" />
              More
            </button>
          </div>
          <button type="button" className="login-button tweet-button">
            Tweet
          </button>
        </div>
      </div>

      <div className="home">
        <div>
          <h1>Home</h1>
          <img src={svg10} alt="svg10" />
        </div>
        <div>
          <img src={png1} alt="png1" />
          <textarea name="text" id="text" cols={30} rows={10}></textarea>
        </div>
      </div>
      <article></article>
    </div>
  );
}

export default HomePage;
