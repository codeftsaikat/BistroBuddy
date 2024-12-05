import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // handleGoogleLogin
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user.email,
        };
        axiosPublic.post("/user", userInfo).then((res) => {
          console.log(res.data);
        });
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div onClick={handleGoogleLogin}>
      <button className="btn">
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
